import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorProfileModule } from './users/tutor-profile.module';
import { SubmissionModule } from './submissions/submission.module';

@Module({
  imports: [CourseModule, TutorProfileModule, SubmissionModul,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
