import { Controller, Get, Post, Body, Query, Patch } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationPreferencesDto } from './dto/update-preferences.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.create(createNotificationDto);
  }

  @Get()
  findAll() {
    return this.notificationsService.findAll();
  }

  @Get('user')
  findByUserId(@Query('userId') userId: string) {
    return this.notificationsService.findByUserId(userId);
  }

  @Get('preferences')
  getPreferences(@Query('userId') userId: string) {
    return this.notificationsService.getPreferences(userId);
  }

  @Patch('preferences')
  upsertPreferences(
    @Query('userId') userId: string,
    @Body() updateDto: UpdateNotificationPreferencesDto,
  ) {
    return this.notificationsService.upsertPreferences(userId, updateDto);
  }
}
