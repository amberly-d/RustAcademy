/** Weekly challenge metadata returned by the challenges API. */
export interface WeeklyChallengeMetadata {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  rewardXp: number;
  bonusDescription: string;
  isActive: boolean;
}
