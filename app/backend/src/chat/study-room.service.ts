import {
  Injectable,
  Logger,
  NotFoundException,
  ConflictException,
  ForbiddenException,
  BadRequestException,
} from "@nestjs/common";

import { StudyRoomRepository } from "./study-room.repository";
import type { CreateRoomData, UpdateRoomData } from "./study-room.repository";
import type {
  StudyRoom,
  StudyRoomMember,
  StudyRoomMessage,
} from "./entities/study-room.entity";

export interface RoomWithMemberCount extends StudyRoom {
  memberCount: number;
}

@Injectable()
export class StudyRoomService {
  private readonly logger = new Logger(StudyRoomService.name);

  constructor(private readonly roomRepo: StudyRoomRepository) {}

  // ---------------------------------------------------------------------------
  // Rooms
  // ---------------------------------------------------------------------------

  async createRoom(
    data: Omit<CreateRoomData, "createdByPublicKey">,
    createdByPublicKey: string,
  ): Promise<RoomWithMemberCount> {
    this.logger.log(
      `Creating room "${data.name}" for topic "${data.topic}" by ${createdByPublicKey.slice(0, 8)}...`,
    );

    const room = await this.roomRepo.createRoom({ ...data, createdByPublicKey });

    // Auto-join the creator
    await this.roomRepo.addMember(room.id, createdByPublicKey);

    return { ...room, memberCount: 1 };
  }

  async listRooms(filters: {
    topic?: string;
    status?: "active" | "archived";
    page?: number;
    limit?: number;
  }): Promise<{ items: RoomWithMemberCount[]; total: number; page: number; limit: number }> {
    const page = filters.page ?? 1;
    const limit = filters.limit ?? 20;

    const { items, total } = await this.roomRepo.findRooms({ ...filters, page, limit });

    // Enrich each room with its member count
    const itemsWithCount = await Promise.all(
      items.map(async (room) => ({
        ...room,
        memberCount: await this.roomRepo.countMembers(room.id),
      })),
    );

    return { items: itemsWithCount, total, page, limit };
  }

  async getRoomById(id: string): Promise<RoomWithMemberCount> {
    const room = await this.roomRepo.findRoomById(id);

    if (!room) {
      throw new NotFoundException({ error: "ROOM_NOT_FOUND", message: `Study room ${id} not found` });
    }

    const memberCount = await this.roomRepo.countMembers(id);
    return { ...room, memberCount };
  }

  async updateRoom(
    id: string,
    data: UpdateRoomData,
    callerPublicKey: string,
  ): Promise<RoomWithMemberCount> {
    const room = await this.getRoomById(id);

    if (room.createdByPublicKey !== callerPublicKey) {
      throw new ForbiddenException({
        error: "NOT_ROOM_OWNER",
        message: "Only the room creator can update this room",
      });
    }

    const updated = await this.roomRepo.updateRoom(id, data);

    if (!updated) {
      throw new NotFoundException({ error: "ROOM_NOT_FOUND", message: `Study room ${id} not found` });
    }

    const memberCount = await this.roomRepo.countMembers(id);
    return { ...updated, memberCount };
  }

  async deleteRoom(id: string, callerPublicKey: string): Promise<void> {
    const room = await this.getRoomById(id);

    if (room.createdByPublicKey !== callerPublicKey) {
      throw new ForbiddenException({
        error: "NOT_ROOM_OWNER",
        message: "Only the room creator can delete this room",
      });
    }

    this.logger.log(`Deleting study room ${id} by ${callerPublicKey.slice(0, 8)}...`);
    await this.roomRepo.deleteRoom(id);
  }

  // ---------------------------------------------------------------------------
  // Membership
  // ---------------------------------------------------------------------------

  async joinRoom(roomId: string, publicKey: string): Promise<StudyRoomMember> {
    const room = await this.getRoomById(roomId);

    if (room.status === "archived") {
      throw new BadRequestException({
        error: "ROOM_ARCHIVED",
        message: "Cannot join an archived room",
      });
    }

    const existing = await this.roomRepo.findMember(roomId, publicKey);
    if (existing) {
      throw new ConflictException({
        error: "ALREADY_MEMBER",
        message: "You are already a member of this room",
      });
    }

    if (room.maxParticipants !== null && room.memberCount >= room.maxParticipants) {
      throw new BadRequestException({
        error: "ROOM_FULL",
        message: `This room has reached its maximum capacity of ${room.maxParticipants}`,
      });
    }

    this.logger.log(`${publicKey.slice(0, 8)}... joined room ${roomId}`);
    return this.roomRepo.addMember(roomId, publicKey);
  }

  async leaveRoom(roomId: string, publicKey: string): Promise<void> {
    await this.getRoomById(roomId); // ensure room exists

    const existing = await this.roomRepo.findMember(roomId, publicKey);
    if (!existing) {
      throw new NotFoundException({
        error: "NOT_A_MEMBER",
        message: "You are not a member of this room",
      });
    }

    this.logger.log(`${publicKey.slice(0, 8)}... left room ${roomId}`);
    await this.roomRepo.removeMember(roomId, publicKey);
  }

  async listMembers(roomId: string): Promise<StudyRoomMember[]> {
    await this.getRoomById(roomId); // ensure room exists
    return this.roomRepo.listMembers(roomId);
  }

  // ---------------------------------------------------------------------------
  // Messages
  // ---------------------------------------------------------------------------

  async sendMessage(
    roomId: string,
    senderPublicKey: string,
    content: string,
  ): Promise<StudyRoomMessage> {
    const room = await this.getRoomById(roomId);

    if (room.status === "archived") {
      throw new BadRequestException({
        error: "ROOM_ARCHIVED",
        message: "Cannot send messages to an archived room",
      });
    }

    const member = await this.roomRepo.findMember(roomId, senderPublicKey);
    if (!member) {
      throw new ForbiddenException({
        error: "NOT_A_MEMBER",
        message: "You must join the room before sending messages",
      });
    }

    return this.roomRepo.createMessage(roomId, senderPublicKey, content);
  }

  async listMessages(
    roomId: string,
    page = 1,
    limit = 50,
  ): Promise<{ items: StudyRoomMessage[]; total: number; page: number; limit: number }> {
    await this.getRoomById(roomId); // ensure room exists
    const { items, total } = await this.roomRepo.listMessages(roomId, page, limit);
    return { items, total, page, limit };
  }

  async deleteMessage(
    roomId: string,
    messageId: string,
    callerPublicKey: string,
  ): Promise<void> {
    await this.getRoomById(roomId);

    const message = await this.roomRepo.findMessageById(messageId);
    if (!message || message.roomId !== roomId) {
      throw new NotFoundException({
        error: "MESSAGE_NOT_FOUND",
        message: `Message ${messageId} not found in room ${roomId}`,
      });
    }

    if (message.senderPublicKey !== callerPublicKey) {
      throw new ForbiddenException({
        error: "NOT_MESSAGE_AUTHOR",
        message: "You can only delete your own messages",
      });
    }

    await this.roomRepo.deleteMessage(messageId);
  }
}
