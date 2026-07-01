import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { CourseEntity } from './course.entity';
import { CourseRevisionEntity } from './course-revision.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, CourseRevisionEntity])],
import { RewardsModule } from '../rewards/rewards.module';

@Module({
  imports: [RewardsModule],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}
