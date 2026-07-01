import { IsString, IsOptional, IsObject } from 'class-validator';

export class PreScoreDto {
  @IsString()
  userId: string;

  @IsString()
  taskId: string;

  @IsString()
  code: string;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}
