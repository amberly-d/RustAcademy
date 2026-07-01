export class UserProfileEntity {
  id: string;
  userId: string;
  displayName: string;
  bio?: string;
  avatarUrl?: string;
  location?: string;
  website?: string;
  githubUsername?: string;
  skills: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<UserProfileEntity>) {
    Object.assign(this, partial);
    this.skills = this.skills || [];
    this.createdAt = this.createdAt || new Date();
    this.updatedAt = this.updatedAt || new Date();
  }
}
