import { Injectable } from '@nestjs/common';
import { UserProfileEntity } from './user-profile.entity';

@Injectable()
export class UserProfileService {
  private readonly profiles: Map<string, UserProfileEntity> = new Map();

  async create(profile: Partial<UserProfileEntity>): Promise<UserProfileEntity> {
    const entity = new UserProfileEntity({
      id: crypto.randomUUID(),
      ...profile,
    });
    this.profiles.set(entity.id, entity);
    return entity;
  }

  async findAll(): Promise<UserProfileEntity[]> {
    return Array.from(this.profiles.values());
  }

  async findById(id: string): Promise<UserProfileEntity | null> {
    return this.profiles.get(id) || null;
  }

  async findByUserId(userId: string): Promise<UserProfileEntity | null> {
    return Array.from(this.profiles.values()).find(p => p.userId === userId) || null;
  }

  async update(id: string, updates: Partial<UserProfileEntity>): Promise<UserProfileEntity | null> {
    const profile = this.profiles.get(id);
    if (!profile) return null;
    Object.assign(profile, updates, { updatedAt: new Date() });
    return profile;
  }

  async remove(id: string): Promise<boolean> {
    return this.profiles.delete(id);
  }
}
