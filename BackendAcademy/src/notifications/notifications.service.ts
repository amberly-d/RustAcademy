import { Injectable } from '@nestjs/common';
import { Notification } from './interfaces/notifications.interface';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationPreferences } from './interfaces/preferences.interface';
import { UpdateNotificationPreferencesDto } from './dto/update-preferences.dto';

@Injectable()
export class NotificationsService {
  private notifications: Notification[] = [];
  private preferences: Map<string, NotificationPreferences> = new Map();

  create(createNotificationDto: CreateNotificationDto): Notification {
    const newNotification: Notification = {
      id: Math.random().toString(36).substring(2, 9),
      ...createNotificationDto,
      isRead: false,
      createdAt: new Date(),
    };
    this.notifications.push(newNotification);
    return newNotification;
  }

  findAll(): Notification[] {
    return this.notifications;
  }

  findByUserId(userId: string): Notification[] {
    return this.notifications.filter(n => n.userId === userId);
  }

  upsertPreferences(userId: string, updateDto: UpdateNotificationPreferencesDto): NotificationPreferences {
    const existing = this.preferences.get(userId) || {
      userId,
      email_alerts: false,
      push_notifications: false,
      marketing_updates: false,
    };

    const updated = { ...existing, ...updateDto };
    this.preferences.set(userId, updated);
    return updated;
  }

  getPreferences(userId: string): NotificationPreferences {
    return this.preferences.get(userId) || {
      userId,
      email_alerts: false,
      push_notifications: false,
      marketing_updates: false,
    };
  }
}
