/**
 * Optional query parameters for the tutor review queue endpoints.
 */
export class ReviewQueueQueryDto {
  /**
   * Filter by a specific task ID.
   * When omitted all tasks are included.
   */
  taskId?: string;

  /**
   * Cursor-based pagination — the last submission ID seen by the client.
   * The response will return submissions submitted *after* this ID.
   * When omitted the first page is returned.
   */
  cursor?: string;

  /**
   * Maximum number of items to return (default: 20, max: 100).
   */
  limit?: number;
}
