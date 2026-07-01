import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Get()
  findAll(): string[] {
    return this.submissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.submissionsService.findOne(id);
  }

  @Post()
  create(@Body() payload: { learnerId: string; taskId: string; content: string }): string {
    return this.submissionsService.create(payload);
  }
}
