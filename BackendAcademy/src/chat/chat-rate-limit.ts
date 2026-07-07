/**
 * Session-based chat rate limiting.
 *
 * Tracks message timestamps per session (keyed by senderId) using a sliding
 * window so a single user cannot flood chat rooms. This is scoped to the chat
 * module and is independent of the global ThrottlerGuard, which limits by IP.
 */
export interface ChatRateLimitConfig {
  /** Maximum number of messages allowed within the window. */
  maxMessages: number;
  /** Length of the sliding window in milliseconds. */
  windowMs: number;
}

export const DEFAULT_CHAT_RATE_LIMIT: ChatRateLimitConfig = {
  maxMessages: 10,
  windowMs: 10_000,
};

export class ChatRateLimiter {
  private readonly hits = new Map<string, number[]>();

  constructor(
    private readonly config: ChatRateLimitConfig = DEFAULT_CHAT_RATE_LIMIT,
  ) {}

  /**
   * Records an attempt for the given session and reports whether it is allowed.
   * Returns the number of seconds to wait when the limit has been exceeded.
   */
  check(sessionId: string, now: number = Date.now()): {
    allowed: boolean;
    retryAfterSeconds: number;
  } {
    const windowStart = now - this.config.windowMs;
    const recent = (this.hits.get(sessionId) ?? []).filter(
      (timestamp) => timestamp > windowStart,
    );

    if (recent.length >= this.config.maxMessages) {
      this.hits.set(sessionId, recent);
      const oldest = recent[0];
      const retryAfterMs = oldest + this.config.windowMs - now;
      return {
        allowed: false,
        retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)),
      };
    }

    recent.push(now);
    this.hits.set(sessionId, recent);
    return { allowed: true, retryAfterSeconds: 0 };
  }

  /** Clears all tracked sessions (primarily for testing). */
  reset(): void {
    this.hits.clear();
  }
}
