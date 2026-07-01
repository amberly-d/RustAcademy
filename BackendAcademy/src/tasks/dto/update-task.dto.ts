import { IsString, IsNumber, IsOptional, IsArray, IsEnum, Min, IsBoolean } from 'class-validator';
import { TaskDifficulty } from '../interfaces/task-difficulty.enum';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TaskDifficulty)
  difficulty?: TaskDifficulty;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  testCases?: string[];

  @IsOptional()
  @IsString()
  expectedOutput?: string;

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

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
