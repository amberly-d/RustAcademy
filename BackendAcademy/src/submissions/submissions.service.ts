import { Injectable } from '@nestjs/common';

@Injectable()
export class SubmissionsService {
  private readonly submissions: Array<{ id: string; learnerId: string; taskId: string; content: string }> = [];

  findAll(): string[] {
    return this.submissions.map((submission) => submission.id);
  }

  findOne(id: string): string {
    const submission = this.submissions.find((item) => item.id === id);
    return submission ? JSON.stringify(submission) : 'Submission not found';
  }

  create(payload: { learnerId: string; taskId: string; content: string }): string {
    const submission = {
      id: `${Date.now()}`,
      ...payload,
    };

    this.submissions.push(submission);
    return JSON.stringify(submission);
  }
}
