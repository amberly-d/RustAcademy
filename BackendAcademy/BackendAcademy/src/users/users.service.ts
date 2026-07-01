import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(dto: CreateUserDto) {
    // TODO: persist via repository
    return { ...dto, id: Date.now() };
  }

  findAll() {
    // TODO: query repository
    return [];
  }

  findOne(id: number) {
    // TODO: query repository
    const user = null;
    if (!user) throw new NotFoundException(`User #${id} not found`);
    return user;
  }

  update(id: number, dto: UpdateUserDto) {
    // TODO: query then persist
    return { id, ...dto };
  }

  remove(id: number) {
    // TODO: delete from repository
    return { deleted: id };
  }
}