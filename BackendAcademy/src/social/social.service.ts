import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSocialPostDto } from './dto/create-social-post.dto';
import { GetSocialFeedDto } from './dto/get-social-feed.dto';
import { UpdateModerationDto } from './dto/update-moderation.dto';
import {
  ModerationStatus,
  SocialFeedResponse,
  SocialPost,
} from './interfaces/social-post.interface';

@Injectable()
export class SocialService {
  private readonly posts = new Map<string, SocialPost>();
  private idCounter = 1;

  createPost(userId: string, dto: CreateSocialPostDto): SocialPost {
    const normalizedUserId = this.normalizeUserId(userId);
    const normalizedContent = this.normalizeContent(dto.content);

    const post: SocialPost = {
      id: this.generateId(),
      userId: normalizedUserId,
      content: normalizedContent,
      createdAt: new Date(),
      updatedAt: new Date(),
      moderationStatus: 'pending',
      likes: 0,
      comments: 0,
    };

    this.posts.set(post.id, post);
    return post;
  }

  getFeed(dto: GetSocialFeedDto): SocialFeedResponse {
    const { page = 1, limit = 10, status } = dto;
    const normalizedStatus = status ? this.normalizeStatus(status) : undefined;

    let filteredPosts = Array.from(this.posts.values());

    if (normalizedStatus) {
      filteredPosts = filteredPosts.filter(
        (post) => post.moderationStatus === normalizedStatus,
      );
    }

    const sortedPosts = filteredPosts.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

    return {
      posts: paginatedPosts,
      total: filteredPosts.length,
      page,
      limit,
    };
  }

  getPostById(postId: string): SocialPost {
    const normalizedPostId = this.normalizeId(postId, 'postId');
    const post = this.posts.get(normalizedPostId);

    if (!post) {
      throw new NotFoundException({
        error: 'POST_NOT_FOUND',
        message: `Post with ID ${normalizedPostId} not found`,
      });
    }

    return post;
  }

  moderatePost(
    postId: string,
    moderatorId: string,
    dto: UpdateModerationDto,
  ): SocialPost {
    const normalizedPostId = this.normalizeId(postId, 'postId');
    const normalizedModeratorId = this.normalizeUserId(moderatorId);
    const normalizedStatus = this.normalizeStatus(dto.status);

    const post = this.posts.get(normalizedPostId);

    if (!post) {
      throw new NotFoundException({
        error: 'POST_NOT_FOUND',
        message: `Post with ID ${normalizedPostId} not found`,
      });
    }

    post.moderationStatus = normalizedStatus;
    post.moderatedBy = normalizedModeratorId;
    post.moderatedAt = new Date();
    post.moderationReason = dto.reason;
    post.updatedAt = new Date();

    this.posts.set(normalizedPostId, post);
    return post;
  }

  deletePost(postId: string): void {
    const normalizedPostId = this.normalizeId(postId, 'postId');
    const deleted = this.posts.delete(normalizedPostId);

    if (!deleted) {
      throw new NotFoundException({
        error: 'POST_NOT_FOUND',
        message: `Post with ID ${normalizedPostId} not found`,
      });
    }
  }

  flagPost(postId: string, userId: string): SocialPost {
    const normalizedPostId = this.normalizeId(postId, 'postId');
    const normalizedUserId = this.normalizeUserId(userId);

    const post = this.posts.get(normalizedPostId);

    if (!post) {
      throw new NotFoundException({
        error: 'POST_NOT_FOUND',
        message: `Post with ID ${normalizedPostId} not found`,
      });
    }

    if (post.moderationStatus !== 'approved') {
      throw new BadRequestException({
        error: 'INVALID_POST_STATUS',
        message: 'Only approved posts can be flagged',
      });
    }

    post.moderationStatus = 'flagged';
    post.moderatedBy = normalizedUserId;
    post.moderatedAt = new Date();
    post.moderationReason = 'Flagged by user';
    post.updatedAt = new Date();

    this.posts.set(normalizedPostId, post);
    return post;
  }

  getPendingPosts(): SocialPost[] {
    return Array.from(this.posts.values()).filter(
      (post) => post.moderationStatus === 'pending',
    );
  }

  private generateId(): string {
    return `post_${this.idCounter++}`;
  }

  private normalizeId(value: string | undefined, field: string): string {
    const normalized = value?.trim();
    if (!normalized) {
      throw new BadRequestException({
        error: 'INVALID_INPUT',
        message: `${field} is required`,
      });
    }
    return normalized;
  }

  private normalizeUserId(userId: string): string {
    return this.normalizeId(userId, 'userId');
  }

  private normalizeContent(content: string): string {
    const normalized = content?.trim();
    if (!normalized) {
      throw new BadRequestException({
        error: 'INVALID_CONTENT',
        message: 'Content is required',
      });
    }
    if (normalized.length > 5000) {
      throw new BadRequestException({
        error: 'INVALID_CONTENT',
        message: 'Content must be less than 5000 characters',
      });
    }
    return normalized;
  }

  private normalizeStatus(status: string): ModerationStatus {
    const validStatuses: ModerationStatus[] = ['pending', 'approved', 'rejected', 'flagged'];
    if (!validStatuses.includes(status as ModerationStatus)) {
      throw new BadRequestException({
        error: 'INVALID_STATUS',
        message: `Status must be one of: ${validStatuses.join(', ')}`,
      });
    }
    return status as ModerationStatus;
  }
}
