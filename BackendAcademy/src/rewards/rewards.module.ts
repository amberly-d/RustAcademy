import { Module } from '@nestjs/common';
import { RewardsController } from './rewards.controller';
import { RewardsService } from './rewards.service';
import { StreakController } from './streak.controller';
import { StreakService } from './streak.service';

/**
 * RewardsModule
 *
 * Self-contained feature module for the XP/level/progression system.
 * Import this module in AppModule to enable the /rewards/* endpoints.
 */
@Module({
  controllers: [RewardsController, StreakController],
  providers: [RewardsService, StreakService],
  exports: [RewardsService, StreakService],
})
export class RewardsModule {}
