import { IsString, IsNumber, IsOptional, IsArray, IsEnum, Min } from 'class-validator';
import { TaskDifficulty } from '../interfaces/task-difficulty.enum';

export class CreateTaskDto {
  @IsString()
  lessonId: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(TaskDifficulty)
  difficulty: TaskDifficulty;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  testCases?: string[];

  @IsString()
  expectedOutput: string;

  @IsOptional()
  @IsNumber()
  xpReward?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  passingScore?: number;

  @IsOptional()
  @IsString()
  templateCode?: string;
}
