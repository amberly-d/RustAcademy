export interface ILesson {
  id: string;
  courseId: string;
  title: string;
  content: string;
  order: number;
  duration: number;
  xpReward: number;
  prerequisites: string[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
