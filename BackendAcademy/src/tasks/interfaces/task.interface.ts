import { TaskDifficulty } from './task-difficulty.enum';

export interface ITask {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  difficulty: TaskDifficulty;
  testCases: string[];
  expectedOutput: string;
  xpReward: number;
  passingScore: number;
  templateCode: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
