import { IsString, IsNumber, IsOptional, IsArray, IsEnum } from 'class-validator';
import { CourseLevel } from '../interfaces/course-level.enum';

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(CourseLevel)
  level: CourseLevel;

  @IsNumber()
  order: number;

  @IsString()
  learningPathId: string;

  @IsNumber()
  duration: number;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  prerequisites?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  skills?: string[];

  @IsOptional()
  @IsNumber()
  xpReward?: number;
}
