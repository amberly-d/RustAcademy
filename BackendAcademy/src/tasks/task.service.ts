import { Injectable } from '@nestjs/common';
import { TaskEntity } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private readonly tasks: Map<string, TaskEntity> = new Map();

  async create(dto: CreateTaskDto): Promise<TaskEntity> {
    const task = new TaskEntity({
      id: crypto.randomUUID(),
      ...dto,
    });
    this.tasks.set(task.id, task);
    return task;
  }

  async findAll(): Promise<TaskEntity[]> {
    return Array.from(this.tasks.values()).filter((t) => t.isActive);
  }

  async findByLessonId(lessonId: string): Promise<TaskEntity[]> {
    return Array.from(this.tasks.values()).filter(
      (t) => t.lessonId === lessonId && t.isActive,
    );
  }

  async findById(id: string): Promise<TaskEntity | null> {
    return this.tasks.get(id) || null;
  }

  async update(
    id: string,
    dto: UpdateTaskDto,
  ): Promise<TaskEntity | null> {
    const task = this.tasks.get(id);
    if (!task) return null;
    Object.assign(task, dto, { updatedAt: new Date() });
    return task;
  }

  async remove(id: string): Promise<boolean> {
    const task = this.tasks.get(id);
    if (!task) return false;
    task.isActive = false;
    task.updatedAt = new Date();
    return true;
  }
}
