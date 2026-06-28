/**
 * Daily Streak configuration.
 *
 * Defines streak mechanics including XP rewards for maintaining
 * consecutive daily check-ins.
 */
export const STREAK_BONUS_XP = 10; // Bonus XP per streak day
export const BASE_CHECKIN_XP = 10; // Base XP for any check-in

/**
 * Streak bonus thresholds: [streakDays, bonusXp]
 * Grants bonus XP when reaching these streak milestones
 */
export const STREAK_BONUS_THRESHOLDS: [number, number][] = [
  [3, 5],   // 3-day streak: +5 XP
  [7, 10],  // 7-day streak: +10 XP
  [14, 20], // 14-day streak: +20 XP
  [30, 50], // 30-day streak: +50 XP
];

/**
 * Calculates milliseconds until next check-in is available
 * (midnight of next day)
 */
export function msToNextCheckin(now: Date = new Date()): number {
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0, 0, 0, 0 // midnight
  );
  return tomorrow.getTime() - now.getTime();
}