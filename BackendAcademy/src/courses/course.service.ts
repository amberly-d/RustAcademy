import { Injectable } from '@nestjs/common';
import { CourseEntity } from './course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  private readonly courses: Map<string, CourseEntity> = new Map();

  async create(dto: CreateCourseDto): Promise<CourseEntity> {
    const course = new CourseEntity({
      id: crypto.randomUUID(),
      ...dto,
    });
    this.courses.set(course.id, course);
    return course;
  }

  async findAll(): Promise<CourseEntity[]> {
    return Array.from(this.courses.values()).filter(c => c.isActive);
  }

  async findByLevel(level: string): Promise<CourseEntity[]> {
    return Array.from(this.courses.values()).filter(
      c => c.isActive && c.level === level,
    );
  }

  async findById(id: string): Promise<CourseEntity | null> {
    return this.courses.get(id) || null;
  }

  async update(id: string, dto: UpdateCourseDto): Promise<CourseEntity | null> {
    const course = this.courses.get(id);
    if (!course) return null;
    Object.assign(course, dto, { updatedAt: new Date() });
    return course;
  }

  async remove(id: string): Promise<boolean> {
    return this.courses.delete(id);
  }
}
