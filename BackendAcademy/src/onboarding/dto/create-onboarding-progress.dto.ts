import { IsString, IsNumber, IsOptional, IsObject } from 'class-validator';

export class CreateOnboardingProgressDto {
  @IsString()
  userId: string;

  @IsString()
  currentStep: string;

  @IsNumber()
  totalSteps: number;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}
