import { IsString, IsOptional, IsArray, IsBoolean, IsObject } from 'class-validator';

export class UpdateOnboardingProgressDto {
  @IsOptional()
  @IsString()
  currentStep?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  completedSteps?: string[];

  @IsOptional()
  @IsBoolean()
  isComplete?: boolean;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}
