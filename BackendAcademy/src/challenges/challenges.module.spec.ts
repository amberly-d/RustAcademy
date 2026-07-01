import { Test } from '@nestjs/testing';
import { ChallengesController } from './challenges.controller';
import { ChallengesModule } from './challenges.module';
import { ChallengesService } from './challenges.service';

describe('ChallengesModule', () => {
  it('registers challenge voting controller and service', async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ChallengesModule],
    }).compile();

    expect(moduleRef.get(ChallengesController)).toBeInstanceOf(ChallengesController);
    expect(moduleRef.get(ChallengesService)).toBeInstanceOf(ChallengesService);
  });
});
