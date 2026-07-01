import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileEntity } from './user-profile.entity';

@Controller('user-profiles')
export class UserProfileController {
  constructor(private readonly profileService: UserProfileService) {}

  @Post()
  async create(@Body() dto: Partial<UserProfileEntity>) {
    return this.profileService.create(dto);
  }

  @Get()
  async findAll() {
    return this.profileService.findAll();
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.profileService.findByUserId(userId);
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    return this.profileService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updates: Partial<UserProfileEntity>,
  ) {
    return this.profileService.update(id, updates);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.profileService.remove(id);
  }
}
