import { Injectable } from '@nestjs/common';
import { AnalyticsEvent } from './analytics.entity';

export enum EventType {
  USER_REGISTERED = 'user_registered',
  USER_LOGIN = 'user_login',
  USER_LOGOUT = 'user_logout',
  PROFILE_UPDATED = 'profile_updated',
  COURSE_ENROLLED = 'course_enrolled',
  COURSE_COMPLETED = 'course_completed',
  CHALLENGE_STARTED = 'challenge_started',
  CHALLENGE_COMPLETED = 'challenge_completed',
  CHALLENGE_SUBMITTED = 'challenge_submitted',
  BADGE_EARNED = 'badge_earned',
  TUTORIAL_STARTED = 'tutorial_started',
  TUTORIAL_COMPLETED = 'tutorial_completed',
  REWARD_CLAIMED = 'reward_claimed',
  LEADERBOARD_VIEWED = 'leaderboard_viewed',
}

@Injectable()
export class AnalyticsService {
  private readonly events: AnalyticsEvent[] = [];

  async trackEvent(event: Partial<AnalyticsEvent>): Promise<AnalyticsEvent> {
    const analyticsEvent = new AnalyticsEvent({
      ...event,
      timestamp: new Date(),
    });
    this.events.push(analyticsEvent);
    return analyticsEvent;
  }

  async getEventsByUserId(userId: string): Promise<AnalyticsEvent[]> {
    return this.events.filter(event => event.userId === userId);
  }

  async getEventsByType(eventType: string): Promise<AnalyticsEvent[]> {
    return this.events.filter(event => event.eventType === eventType);
  }

  async getEventsByDateRange(startDate: Date, endDate: Date): Promise<AnalyticsEvent[]> {
    return this.events.filter(
      event => event.timestamp >= startDate && event.timestamp <= endDate,
    );
  }

  async getEventStatistics(): Promise<{
    totalEvents: number;
    eventsByType: Record<string, number>;
    uniqueUsers: number;
  }> {
    const eventsByType: Record<string, number> = {};
    const uniqueUsers = new Set<string>();

    for (const event of this.events) {
      eventsByType[event.eventType] = (eventsByType[event.eventType] || 0) + 1;
      if (event.userId) {
        uniqueUsers.add(event.userId);
      }
    }

    return {
      totalEvents: this.events.length,
      eventsByType,
      uniqueUsers: uniqueUsers.size,
    };
  }

  async getAllEvents(limit?: number): Promise<AnalyticsEvent[]> {
    if (limit) {
      return this.events.slice(-limit);
    }
    return this.events;
  }

  async deleteEvent(id: string): Promise<boolean> {
    const index = this.events.findIndex(event => event.id === id);
    if (index === -1) return false;
    this.events.splice(index, 1);
    return true;
  }

  async clearOldEvents(daysToKeep: number = 30): Promise<number> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
    
    const initialLength = this.events.length;
    const filtered = this.events.filter(event => event.timestamp >= cutoffDate);
    this.events.length = 0;
    this.events.push(...filtered);
    
    return initialLength - this.events.length;
  }
}
