import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  create(dto: CreateCourseDto) {
    // TODO: persist via repository
    return { ...dto, id: Date.now() };
  }

  findAll() {
    // TODO: query repository
    return [];
  }

  findOne(id: number) {
    // TODO: query repository
    const course = null;
    if (!course) throw new NotFoundException(`Course #${id} not found`);
    return course;
  }

  update(id: number, dto: UpdateCourseDto) {
    // TODO: query then persist
    return { id, ...dto };
  }

  remove(id: number) {
    // TODO: delete from repository
    return { deleted: id };
  }
}