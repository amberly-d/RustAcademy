import { Module } from "@nestjs/common";

import { SupabaseModule } from "../supabase/supabase.module";
import { StudyRoomRepository } from "./study-room.repository";
import { StudyRoomService } from "./study-room.service";
import { StudyRoomController } from "./study-room.controller";

/**
 * ChatModule
 *
 * Provides topic-based study rooms: creation, membership, and messaging.
 *
 * Required Supabase tables (see migration below):
 *   - study_rooms
 *   - study_room_members
 *   - study_room_messages
 */
@Module({
  imports: [SupabaseModule],
  controllers: [StudyRoomController],
  providers: [StudyRoomRepository, StudyRoomService],
  exports: [StudyRoomService],
})
export class ChatModule {}
