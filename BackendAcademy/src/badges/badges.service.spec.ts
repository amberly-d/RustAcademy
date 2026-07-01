import { Test, TestingModule } from '@nestjs/testing';
import { BadgesService } from './badges.service';
import { NotFoundException } from '@nestjs/common';

describe('BadgesService', () => {
  let service: BadgesService;
  const USER_ID = 'test-user-123';
  const BADGE_ID = 'first-login';
  const NFT_TOKEN_ID = '0xabc123';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BadgesService],
    }).compile();

    service = module.get<BadgesService>(BadgesService);
  });

  describe('getAllBadges', () => {
    it('should return all defined badges', () => {
      const { badges } = service.getAllBadges();
      expect(badges.length).toBeGreaterThan(0);
      expect(badges[0]).toHaveProperty('id');
      expect(badges[0]).toHaveProperty('name');
    });
  });

  describe('getUserBadges', () => {
    it('should return an empty list for a user with no badges', () => {
      const { badges } = service.getUserBadges(USER_ID);
      expect(badges).toEqual([]);
    });

    it('should return the correct user id', () => {
      const { userId } = service.getUserBadges(USER_ID);
      expect(userId).toBe(USER_ID);
    });
  });

  describe('awardBadge', () => {
    it('should award a badge to a user', () => {
      const response = service.awardBadge(USER_ID, BADGE_ID, NFT_TOKEN_ID);
      expect(response.userId).toBe(USER_ID);
      expect(response.badges.length).toBe(1);
      expect(response.badges[0].badge.id).toBe(BADGE_ID);
      expect(response.badges[0].nftTokenId).toBe(NFT_TOKEN_ID);
    });

    it('should not award the same badge twice to the same user', () => {
      service.awardBadge(USER_ID, BADGE_ID, NFT_TOKEN_ID);
      const response = service.awardBadge(USER_ID, BADGE_ID, 'different-token');
      expect(response.badges.length).toBe(1);
    });

    it('should throw NotFoundException for non-existent badge', () => {
      expect(() => service.awardBadge(USER_ID, 'non-existent', NFT_TOKEN_ID)).toThrow(
        NotFoundException,
      );
    });
  });

  describe('resetUserBadges', () => {
    it('should clear all badges for a user', () => {
      service.awardBadge(USER_ID, BADGE_ID, NFT_TOKEN_ID);
      service.resetUserBadges(USER_ID);
      const { badges } = service.getUserBadges(USER_ID);
      expect(badges.length).toBe(0);
    });
  });
});
