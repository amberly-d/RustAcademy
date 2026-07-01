import { Injectable } from '@nestjs/common';

export interface UserPreferencesDto {
  learnerPreferences?: Record<string, unknown>;
  tutorPreferences?: Record<string, unknown>;
}

export interface UserPreferencesResponse {
  userId: string;
  learnerPreferences?: Record<string, unknown>;
  tutorPreferences?: Record<string, unknown>;
}

@Injectable()
export class UsersService {
  private readonly preferencesByUser = new Map<string, UserPreferencesResponse>();

  async updatePreferences(
    userId: string,
    dto: UserPreferencesDto,
  ): Promise<UserPreferencesResponse> {
    const existing = this.preferencesByUser.get(userId) || {
      userId,
      learnerPreferences: {},
      tutorPreferences: {},
    };

    const next = {
      ...existing,
      ...dto,
      learnerPreferences: {
        ...(existing.learnerPreferences || {}),
        ...(dto.learnerPreferences || {}),
      },
      tutorPreferences: {
        ...(existing.tutorPreferences || {}),
        ...(dto.tutorPreferences || {}),
      },
    };

    this.preferencesByUser.set(userId, next);
    return next;
  }
}
