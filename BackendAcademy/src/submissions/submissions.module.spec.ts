import { Test } from '@nestjs/testing';
import { SubmissionsModule } from './submissions.module';
import { SubmissionsController } from './submissions.controller';
import { SubmissionsService } from './submissions.service';

describe('SubmissionsModule', () => {
  it('should register the submissions controller and service', async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [SubmissionsModule],
    }).compile();

    expect(moduleRef.get(SubmissionsController)).toBeInstanceOf(SubmissionsController);
    expect(moduleRef.get(SubmissionsService)).toBeInstanceOf(SubmissionsService);
  });
});
