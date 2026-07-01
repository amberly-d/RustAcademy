export interface IOnboardingStep {
  id: string;
  label: string;
  description: string;
  route: string;
  order: number;
}

export interface IOnboardingProgress {
  id: string;
  userId: string;
  currentStep: string;
  completedSteps: string[];
  totalSteps: number;
  isComplete: boolean;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  metadata?: Record<string, any>;
}
