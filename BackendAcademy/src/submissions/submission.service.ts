import { Injectable, NotFoundException } from '@nestjs/common';
import { SubmissionEntity } from './submission.entity';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { SubmissionStatus } from './interfaces/submission-status.enum';

@Injectable()
export class SubmissionService {
  private readonly submissions: Map<string, SubmissionEntity> = new Map();

  async create(dto: CreateSubmissionDto): Promise<SubmissionEntity> {
    const submission = new SubmissionEntity({
      id: crypto.randomUUID(),
      ...dto,
    });
    this.submissions.set(submission.id, submission);
    return submission;
  }

  async findAll(): Promise<SubmissionEntity[]> {
    return Array.from(this.submissions.values());
  }

  async findById(id: string): Promise<SubmissionEntity | null> {
    return this.submissions.get(id) || null;
  }

  async findByTaskId(taskId: string): Promise<SubmissionEntity[]> {
    return Array.from(this.submissions.values()).filter(
      s => s.taskId === taskId,
    );
  }

  async findByUserId(userId: string): Promise<SubmissionEntity[]> {
    return Array.from(this.submissions.values()).filter(
      s => s.userId === userId,
    );
  }

  async findByStatus(status: SubmissionStatus): Promise<SubmissionEntity[]> {
    return Array.from(this.submissions.values()).filter(
      s => s.status === status,
    );
  }

  async update(
    id: string,
    dto: UpdateSubmissionDto,
  ): Promise<SubmissionEntity | null> {
    const submission = this.submissions.get(id);
    if (!submission) return null;
    Object.assign(submission, dto, { updatedAt: new Date() });

    if (dto.status === SubmissionStatus.APPROVED || dto.status === SubmissionStatus.REJECTED) {
      submission.reviewedAt = submission.reviewedAt || new Date();
    }

    return submission;
  }

  async review(
    id: string,
    reviewerId: string,
    status: SubmissionStatus,
    feedback?: string,
    score?: number,
  ): Promise<SubmissionEntity> {
    const submission = this.submissions.get(id);
    if (!submission) throw new NotFoundException('Submission not found');
    submission.status = status;
    submission.reviewedBy = reviewerId;
    submission.reviewedAt = new Date();
    submission.updatedAt = new Date();
    if (feedback !== undefined) submission.feedback = feedback;
    if (score !== undefined) submission.score = score;
    return submission;
  }

  async remove(id: string): Promise<boolean> {
    return this.submissions.delete(id);
  }
}
