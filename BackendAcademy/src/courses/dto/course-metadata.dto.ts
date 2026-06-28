import { CourseLevel } from '../interfaces/course-level.enum';

export class CourseMetadataDto {
  id: string;
  title: string;
  description: string;
  level: CourseLevel;
  order: number;
  learningPathId: string;
  duration: number;
  xpReward: number;
  skills: string[];
}
