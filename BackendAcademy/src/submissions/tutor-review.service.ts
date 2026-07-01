import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { SubmissionEntity } from './submission.entity';
import { SubmissionStatus } from './interfaces/submission-status.enum';
import { ReviewSubmissionDto } from './dto/review-submission.dto';
import { ReviewQueueQueryDto } from './dto/review-queue-query.dto';

export interface ReviewQueuePage {
  items: SubmissionEntity[];
  total: number;
  /** ID of the last item — pass as `cursor` to fetch the next page. */
  nextCursor: string | null;
}

export interface ReviewStats {
  pending: number;
  approved: number;
  rejected: number;
  needs_revision: number;
  total: number;
}

const DEFAULT_PAGE_LIMIT = 20;
const MAX_PAGE_LIMIT = 100;

/**
 * Tutor-specific operations on top of `SubmissionService`.
 *
 * All state lives in the in-memory store owned by `SubmissionService`
 * so both controllers always see consistent data.
 */
@Injectable()
export class TutorReviewService {
  constructor(private readonly submissionService: SubmissionService) {}

  // ─── Queue ────────────────────────────────────────────────────────────────

  /**
   * Returns pending submissions ordered by `submittedAt` ascending (oldest first)
   * so tutors work through the queue in FIFO order.
   */
  async getPendingQueue(query: ReviewQueueQueryDto): Promise<ReviewQueuePage> {
    const limit = Math.min(
      Math.max(1, Number(query.limit) || DEFAULT_PAGE_LIMIT),
      MAX_PAGE_LIMIT,
    );

    let items = await this.submissionService.findByStatus(SubmissionStatus.PENDING);

    // Optional task filter
    if (query.taskId) {
      items = items.filter(s => s.taskId === query.taskId);
    }

    // Sort by submission time, oldest first
    items.sort(
      (a, b) => a.submittedAt.getTime() - b.submittedAt.getTime(),
    );

    // Cursor-based pagination
    if (query.cursor) {
      const cursorIndex = items.findIndex(s => s.id === query.cursor);
      if (cursorIndex !== -1) {
        items = items.slice(cursorIndex + 1);
      }
    }

    const total = items.length;
    const page = items.slice(0, limit);
    const nextCursor = page.length === limit && total > limit ? page[page.length - 1].id : null;

    return { items: page, total, nextCursor };
  }

  /**
   * Returns all submissions that need a second look (needs_revision),
   * ordered by last-updated time ascending.
   */
  async getNeedsRevisionQueue(query: ReviewQueueQueryDto): Promise<ReviewQueuePage> {
    const limit = Math.min(
      Math.max(1, Number(query.limit) || DEFAULT_PAGE_LIMIT),
      MAX_PAGE_LIMIT,
    );

    let items = await this.submissionService.findByStatus(SubmissionStatus.NEEDS_REVISION);

    if (query.taskId) {
      items = items.filter(s => s.taskId === query.taskId);
    }

    items.sort((a, b) => a.updatedAt.getTime() - b.updatedAt.getTime());

    if (query.cursor) {
      const cursorIndex = items.findIndex(s => s.id === query.cursor);
      if (cursorIndex !== -1) {
        items = items.slice(cursorIndex + 1);
      }
    }

    const total = items.length;
    const page = items.slice(0, limit);
    const nextCursor = page.length === limit && total > limit ? page[page.length - 1].id : null;

    return { items: page, total, nextCursor };
  }

  // ─── Review ───────────────────────────────────────────────────────────────

  /**
   * Tutor reviews a single submission.
   *
   * Rules:
   * - Submission must currently be PENDING or NEEDS_REVISION.
   * - The `status` in the DTO must not be PENDING (tutors move submissions forward).
   * - `score` must be 0–100 when provided.
   */
  async reviewSubmission(
    submissionId: string,
    tutorId: string,
    dto: ReviewSubmissionDto,
  ): Promise<SubmissionEntity> {
    const submission = await this.submissionService.findById(submissionId);

    if (!submission) {
      throw new NotFoundException({
        error: 'SUBMISSION_NOT_FOUND',
        message: `Submission ${submissionId} does not exist`,
      });
    }

    const reviewableStatuses: SubmissionStatus[] = [
      SubmissionStatus.PENDING,
      SubmissionStatus.NEEDS_REVISION,
    ];

    if (!reviewableStatuses.includes(submission.status)) {
      throw new BadRequestException({
        error: 'SUBMISSION_NOT_REVIEWABLE',
        message: `Submission is already in "${submission.status}" state and cannot be reviewed again`,
      });
    }

    if (dto.score !== undefined && (dto.score < 0 || dto.score > 100)) {
      throw new BadRequestException({
        error: 'INVALID_SCORE',
        message: 'Score must be between 0 and 100',
      });
    }

    return this.submissionService.review(
      submissionId,
      tutorId,
      dto.status,
      dto.feedback,
      dto.score,
    );
  }

  // ─── Stats ────────────────────────────────────────────────────────────────

  /**
   * Returns a count breakdown of submissions by status.
   * Optionally scoped to a specific task.
   */
  async getStats(taskId?: string): Promise<ReviewStats> {
    let all = await this.submissionService.findAll();

    if (taskId) {
      all = all.filter(s => s.taskId === taskId);
    }

    return {
      pending: all.filter(s => s.status === SubmissionStatus.PENDING).length,
      approved: all.filter(s => s.status === SubmissionStatus.APPROVED).length,
      rejected: all.filter(s => s.status === SubmissionStatus.REJECTED).length,
      needs_revision: all.filter(s => s.status === SubmissionStatus.NEEDS_REVISION).length,
      total: all.length,
    };
  }

  // ─── History ──────────────────────────────────────────────────────────────

  /**
   * Returns all submissions reviewed by a specific tutor, newest first.
   */
  async getReviewedByTutor(
    tutorId: string,
    query: ReviewQueueQueryDto,
  ): Promise<ReviewQueuePage> {
    const limit = Math.min(
      Math.max(1, Number(query.limit) || DEFAULT_PAGE_LIMIT),
      MAX_PAGE_LIMIT,
    );

    let items = (await this.submissionService.findAll()).filter(
      s => s.reviewedBy === tutorId,
    );

    if (query.taskId) {
      items = items.filter(s => s.taskId === query.taskId);
    }

    // Newest reviewed first
    items.sort(
      (a, b) =>
        (b.reviewedAt?.getTime() ?? 0) - (a.reviewedAt?.getTime() ?? 0),
    );

    if (query.cursor) {
      const cursorIndex = items.findIndex(s => s.id === query.cursor);
      if (cursorIndex !== -1) {
        items = items.slice(cursorIndex + 1);
      }
    }

    const total = items.length;
    const page = items.slice(0, limit);
    const nextCursor = page.length === limit && total > limit ? page[page.length - 1].id : null;

    return { items: page, total, nextCursor };
  }
}
