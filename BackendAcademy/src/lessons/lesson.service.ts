import { Injectable } from '@nestjs/common';
import { LessonEntity } from './lesson.entity';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Injectable()
export class LessonService {
  private readonly lessons: Map<string, LessonEntity> = new Map();

  async create(dto: CreateLessonDto): Promise<LessonEntity> {
    const lesson = new LessonEntity({
      id: crypto.randomUUID(),
      ...dto,
    });
    this.lessons.set(lesson.id, lesson);
    return lesson;
  }

  async findAll(): Promise<LessonEntity[]> {
    return Array.from(this.lessons.values());
  }

  async findByCourseId(courseId: string): Promise<LessonEntity[]> {
    return Array.from(this.lessons.values())
      .filter((l) => l.courseId === courseId)
      .sort((a, b) => a.order - b.order);
  }

  async findById(id: string): Promise<LessonEntity | null> {
    return this.lessons.get(id) || null;
  }

  async update(
    id: string,
    dto: UpdateLessonDto,
  ): Promise<LessonEntity | null> {
    const lesson = this.lessons.get(id);
    if (!lesson) return null;
    Object.assign(lesson, dto, { updatedAt: new Date() });
    return lesson;
  }

  async remove(id: string): Promise<boolean> {
    return this.lessons.delete(id);
  }
}
