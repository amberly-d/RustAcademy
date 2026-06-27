/**
 * Definition of an achievement badge.
 */
export interface Badge {
  /** Unique identifier for the badge */
  id: string;
  /** Human-readable name of the badge */
  name: string;
  /** Description of how to earn the badge */
  description: string;
  /** URL to the badge icon image */
  iconUrl: string;
}

/**
 * An instance of a badge awarded to a specific user.
 */
export interface UserBadge {
  /** The badge definition */
  badge: Badge;
  /** The date and time the badge was awarded (ISO 8601) */
  awardedAt: string;
  /** The unique token ID of the badge NFT on the blockchain */
  nftTokenId: string;
}

/**
 * Response shape for GET /badges/user/:userId
 */
export interface UserBadgesResponse {
  /** The ID of the user */
  userId: string;
  /** The list of badges awarded to the user */
  badges: UserBadge[];
}

/**
 * Response shape for GET /badges
 */
export interface BadgeListResponse {
  /** The list of all available achievement badges */
  badges: Badge[];
}
