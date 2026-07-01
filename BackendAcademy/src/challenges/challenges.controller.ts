import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { CastChallengeVoteDto } from './dto/cast-challenge-vote.dto';
import {
  ChallengeVoteResponse,
  ChallengeVoteTally,
} from './interfaces/challenge-vote.interface';

@Controller('challenges')
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}

  @Post(':challengeId/votes')
  @HttpCode(HttpStatus.OK)
  castVote(
    @Param('challengeId') challengeId: string,
    @Body() dto: CastChallengeVoteDto,
  ): ChallengeVoteResponse {
    return this.challengesService.castVote(challengeId, dto);
  }

  @Get(':challengeId/votes')
  getTally(@Param('challengeId') challengeId: string): ChallengeVoteTally {
    return this.challengesService.getTally(challengeId);
  }
}
