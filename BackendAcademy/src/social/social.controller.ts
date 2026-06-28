import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateSocialPostDto } from './dto/create-social-post.dto';
import { GetSocialFeedDto } from './dto/get-social-feed.dto';
import { UpdateModerationDto } from './dto/update-moderation.dto';
import { SocialFeedResponse, SocialPost } from './interfaces/social-post.interface';
import { SocialService } from './social.service';

@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post('posts')
  @HttpCode(HttpStatus.CREATED)
  createPost(
    @Body() dto: CreateSocialPostDto,
    @Query('userId') userId: string,
  ): SocialPost {
    return this.socialService.createPost(userId, dto);
  }

  @Get('feed')
  getFeed(@Query() dto: GetSocialFeedDto): SocialFeedResponse {
    return this.socialService.getFeed(dto);
  }

  @Get('posts/:postId')
  getPostById(@Param('postId') postId: string): SocialPost {
    return this.socialService.getPostById(postId);
  }

  @Put('posts/:postId/moderate')
  @HttpCode(HttpStatus.OK)
  moderatePost(
    @Param('postId') postId: string,
    @Query('moderatorId') moderatorId: string,
    @Body() dto: UpdateModerationDto,
  ): SocialPost {
    return this.socialService.moderatePost(postId, moderatorId, dto);
  }

  @Post('posts/:postId/flag')
  @HttpCode(HttpStatus.OK)
  flagPost(
    @Param('postId') postId: string,
    @Query('userId') userId: string,
  ): SocialPost {
    return this.socialService.flagPost(postId, userId);
  }

  @Delete('posts/:postId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deletePost(@Param('postId') postId: string): void {
    this.socialService.deletePost(postId);
  }

  @Get('moderation/pending')
  getPendingPosts(): SocialPost[] {
    return this.socialService.getPendingPosts();
  }
}
