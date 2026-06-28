/**
 * Response shape for GET /rewards/streak/:userId
 */
export interface StreakResponse {
  userId: string;
  currentStreak: number;
  longestStreak: number;
  lastCheckin: string | null; // ISO date string
  nextCheckinAvailable: string; // ISO date string
  isStreakAlive: boolean;
}

/**
 * Response shape for POST /rewards/streak/:userId/checkin
 */
export interface CheckinResponse {
  userId: string;
  xpAwarded: number;
  newStreak: number;
  longestStreak: number;
  streakBonus: number;
  message: string;
}

/**
 * Internal streak record stored per user.
 */
export interface StreakRecord {
  userId: string;
  currentStreak: number;
  longestStreak: number;
  lastCheckin: Date | null;
  totalCheckins: number;
}