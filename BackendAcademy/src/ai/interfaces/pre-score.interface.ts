export interface PreScoreResult {
  taskId: string;
  predictedScore: number;
  confidence: number;
  feedback: string;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  evaluatedAt: Date;
}
