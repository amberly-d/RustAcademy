import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { SubmissionStatus } from './interfaces/submission-status.enum';

@Controller('submissions')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post()
  async create(@Body() dto: CreateSubmissionDto) {
    return this.submissionService.create(dto);
  }

  @Get()
  async findAll() {
    return this.submissionService.findAll();
  }

  @Get('task/:taskId')
  async findByTaskId(@Param('taskId') taskId: string) {
    return this.submissionService.findByTaskId(taskId);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.submissionService.findByUserId(userId);
  }

  @Get('status/:status')
  async findByStatus(@Param('status') status: SubmissionStatus) {
    return this.submissionService.findByStatus(status);
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    return this.submissionService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateSubmissionDto,
  ) {
    return this.submissionService.update(id, dto);
  }

  @Post(':id/review')
  async review(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('reviewedBy') reviewerId: string,
    @Body('status') status: SubmissionStatus,
    @Body('feedback') feedback?: string,
    @Body('score') score?: number,
  ) {
    return this.submissionService.review(id, reviewerId, status, feedback, score);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.submissionService.remove(id);
  }
}
