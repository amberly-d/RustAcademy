import { Injectable, NotFoundException } from '@nestjs/common';
import { OnboardingProgress } from './onboarding.entity';
import { CreateOnboardingProgressDto } from './dto/create-onboarding-progress.dto';
import { UpdateOnboardingProgressDto } from './dto/update-onboarding-progress.dto';

@Injectable()
export class OnboardingService {
  private readonly progressMap: Map<string, OnboardingProgress> = new Map();

  async create(
    dto: CreateOnboardingProgressDto,
  ): Promise<OnboardingProgress> {
    const progress = new OnboardingProgress({
      id: crypto.randomUUID(),
      ...dto,
      completedSteps: [],
      isComplete: false,
    });
    this.progressMap.set(progress.id, progress);
    return progress;
  }

  async findByUserId(
    userId: string,
  ): Promise<OnboardingProgress | null> {
    return (
      Array.from(this.progressMap.values()).find(
        (p) => p.userId === userId,
      ) || null
    );
  }

  async update(
    id: string,
    dto: UpdateOnboardingProgressDto,
  ): Promise<OnboardingProgress | null> {
    const progress = this.progressMap.get(id);
    if (!progress) return null;
    Object.assign(progress, dto, { updatedAt: new Date() });
    return progress;
  }

  async completeStep(
    id: string,
    step: string,
  ): Promise<OnboardingProgress> {
    const progress = this.progressMap.get(id);
    if (!progress)
      throw new NotFoundException('Onboarding progress not found');

    if (!progress.completedSteps.includes(step)) {
      progress.completedSteps.push(step);
    }
    progress.currentStep = step;
    progress.updatedAt = new Date();

    if (
      progress.totalSteps > 0 &&
      progress.completedSteps.length >= progress.totalSteps
    ) {
      progress.isComplete = true;
      progress.completedAt = new Date();
    }

    return progress;
  }
}
