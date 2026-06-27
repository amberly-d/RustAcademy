/**
 * XP Progression configuration.
 *
 * Defines how many XP are needed to reach each level and the
 * threshold (minimum XP) required to enter that level.
 * Levels use a quadratic formula: threshold(n) = 100 * n^2
 * so that advancement becomes increasingly challenging.
 *
 * The maximum tracked level is 50. Users may accumulate XP beyond
 * level 50 but their `level` field is capped at 50.
 */
export const MAX_LEVEL = 50;

/**
 * XP awarded for reaching a streak milestone (e.g., every 7 days).
 */
export const STREAK_MILESTONE_XP = 500;

/**
 * How many days constitute a streak milestone.
 */
export const STREAK_MILESTONE_DAYS = 7;

/**
 * XP awarded for reaching a level milestone (e.g., every 5 levels).
 */
export const LEVEL_MILESTONE_XP = 1000;

/**
 * The level interval for milestones (e.g., levels 5, 10, 15...).
 */
export const LEVEL_MILESTONE_INTERVAL = 5;

/**
 * Returns the total XP required to reach the beginning of `level`.
 * Level 1 starts at 0 XP; each subsequent level requires 100 * n^2 XP
 * where n is the level number.
 *
 * @param level  Target level (1 – MAX_LEVEL)
 */
export function xpThresholdForLevel(level: number): number {
  if (level <= 1) return 0;
  return 100 * (level - 1) * (level - 1);
}

/**
 * Computes the current level for a given total XP value.
 * Searches for the highest level whose threshold is ≤ xp.
 *
 * @param xp  Total accumulated XP (non-negative integer)
 */
export function levelForXp(xp: number): number {
  let level = 1;
  for (let n = 2; n <= MAX_LEVEL; n++) {
    if (xp >= xpThresholdForLevel(n)) {
      level = n;
    } else {
      break;
    }
  }
  return level;
}

/**
 * Computes how much XP is still needed to reach the next level.
 * Returns 0 if the user is already at MAX_LEVEL.
 *
 * @param xp     Total accumulated XP
 * @param level  Current level (as computed by `levelForXp`)
 */
export function xpToNextLevel(xp: number, level: number): number {
  if (level >= MAX_LEVEL) return 0;
  return xpThresholdForLevel(level + 1) - xp;
}

// ---------------------------------------------------------------------------
// Leaderboard configuration
// ---------------------------------------------------------------------------

/**
 * Default number of entries returned by the leaderboard endpoint
 * when no explicit ?topN query parameter is provided.
 */
export const LEADERBOARD_DEFAULT_TOP_N = 100;

// ---------------------------------------------------------------------------
// Prize pool configuration
// ---------------------------------------------------------------------------

/**
 * Default currency symbol used for prize pools.
 */
export const PRIZE_POOL_DEFAULT_CURRENCY = 'XLM';

/**
 * Default prize pool amount (in whole currency units) when a pool
 * is auto-created during distribution and no explicit amount was set.
 */
export const PRIZE_POOL_DEFAULT_AMOUNT = 1000;

/**
 * Distribution schedule for the prize pool.
 *
 * Each entry defines what percentage of the total pool a user at
 * a given rank receives.  Ranks not listed receive no payout.
 *
 * Percentages should sum to 100 (or less — unallocated remainder
 * stays in the pool for the next cycle).
 */
export const PRIZE_DISTRIBUTION_PERCENTAGES: { rank: number; percentage: number }[] = [
  { rank: 1,  percentage: 30 },
  { rank: 2,  percentage: 20 },
  { rank: 3,  percentage: 15 },
  { rank: 4,  percentage: 7.5 },
  { rank: 5,  percentage: 7.5 },
  { rank: 6,  percentage: 4 },
  { rank: 7,  percentage: 4 },
  { rank: 8,  percentage: 4 },
  { rank: 9,  percentage: 4 },
  { rank: 10, percentage: 4 },
];
