import { SubmissionStatus } from '../interfaces/submission-status.enum';

export class UpdateSubmissionDto {
  content?: string;
  fileUrl?: string;
  status?: SubmissionStatus;
  feedback?: string;
  score?: number;
  reviewedBy?: string;
}
