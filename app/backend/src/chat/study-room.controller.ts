import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  Logger,
  ParseIntPipe,
  DefaultValuePipe,
  ParseUUIDPipe,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from "@nestjs/swagger";

import { StudyRoomService } from "./study-room.service";
import {
  CreateStudyRoomDto,
  UpdateStudyRoomDto,
  SendMessageDto,
  StudyRoomResponseDto,
  StudyRoomListResponseDto,
  StudyRoomMessageResponseDto,
  MessageListResponseDto,
  StudyRoomMemberResponseDto,
} from "./dto/study-room.dto";
import type { RoomWithMemberCount } from "./study-room.service";
import type { StudyRoomMember, StudyRoomMessage } from "./entities/study-room.entity";

/**
 * Study Rooms API
 *
 * Topic-based collaborative study rooms for the RustAcademy platform.
 * Callers identify themselves via the `x-public-key` header
 * (the Stellar / wallet public key used throughout the system).
 *
 * Routes:
 *   GET    /chat/rooms                        - list rooms (filterable by topic)
 *   POST   /chat/rooms                        - create a new room
 *   GET    /chat/rooms/:roomId                - get room details
 *   PATCH  /chat/rooms/:roomId                - update room (creator only)
 *   DELETE /chat/rooms/:roomId                - delete room (creator only)
 *
 *   GET    /chat/rooms/:roomId/members        - list members
 *   POST   /chat/rooms/:roomId/members        - join a room
 *   DELETE /chat/rooms/:roomId/members/me     - leave a room
 *
 *   GET    /chat/rooms/:roomId/messages       - paginated message history
 *   POST   /chat/rooms/:roomId/messages       - send a message (members only)
 *   DELETE /chat/rooms/:roomId/messages/:msgId - delete own message
 */
@ApiTags("Chat / Study Rooms")
@Controller("chat/rooms")
export class StudyRoomController {
  private readonly logger = new Logger(StudyRoomController.name);

  constructor(private readonly service: StudyRoomService) {}

  // ---------------------------------------------------------------------------
  // Helper – extract caller identity from the standard header
  // ---------------------------------------------------------------------------
  private callerKey(headers: Record<string, string | string[] | undefined>): string {
    const key = headers["x-public-key"];
    if (!key || Array.isArray(key)) {
      return "anonymous";
    }
    return key;
  }

  // ---------------------------------------------------------------------------
  // Rooms – CRUD
  // ---------------------------------------------------------------------------

  @Get()
  @ApiOperation({ summary: "List study rooms, optionally filtered by topic" })
  @ApiQuery({ name: "topic", required: false, description: "Filter by topic slug" })
  @ApiQuery({ name: "status", required: false, enum: ["active", "archived"] })
  @ApiQuery({ name: "page", required: false, type: Number, example: 1 })
  @ApiQuery({ name: "limit", required: false, type: Number, example: 20 })
  @ApiResponse({ status: 200, type: StudyRoomListResponseDto })
  async listRooms(
    @Query("topic") topic?: string,
    @Query("status") status?: "active" | "archived",
    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query("limit", new DefaultValuePipe(20), ParseIntPipe) limit = 20,
  ): Promise<StudyRoomListResponseDto> {
    const result = await this.service.listRooms({ topic, status, page, limit });

    return {
      items: result.items.map(this.toRoomResponse),
      total: result.total,
      page: result.page,
      limit: result.limit,
    };
  }

  @Post()
  @ApiOperation({ summary: "Create a new topic-based study room" })
  @ApiQuery({
    name: "publicKey",
    required: true,
    description: "Creator Stellar public key (or pass via x-public-key header)",
  })
  @ApiResponse({ status: 201, type: StudyRoomResponseDto })
  async createRoom(
    @Body() dto: CreateStudyRoomDto,
    @Query("publicKey") publicKeyQuery?: string,
  ): Promise<StudyRoomResponseDto> {
    const createdByPublicKey = publicKeyQuery ?? "unknown";

    this.logger.log(
      `Create room request: topic="${dto.topic}" by ${createdByPublicKey.slice(0, 8)}...`,
    );

    const room = await this.service.createRoom(
      {
        topic: dto.topic,
        name: dto.name,
        description: dto.description,
        tags: dto.tags,
        maxParticipants: dto.maxParticipants,
      },
      createdByPublicKey,
    );

    return this.toRoomResponse(room);
  }

  @Get(":roomId")
  @ApiOperation({ summary: "Get study room details" })
  @ApiParam({ name: "roomId", description: "UUID of the study room" })
  @ApiResponse({ status: 200, type: StudyRoomResponseDto })
  @ApiResponse({ status: 404, description: "Room not found" })
  async getRoom(
    @Param("roomId", ParseUUIDPipe) roomId: string,
  ): Promise<StudyRoomResponseDto> {
    const room = await this.service.getRoomById(roomId);
    return this.toRoomResponse(room);
  }

  @Patch(":roomId")
  @ApiOperation({ summary: "Update a study room (creator only)" })
  @ApiParam({ name: "roomId", description: "UUID of the study room" })
  @ApiQuery({ name: "publicKey", required: true, description: "Caller's Stellar public key" })
  @ApiResponse({ status: 200, type: StudyRoomResponseDto })
  @ApiResponse({ status: 403, description: "Not room creator" })
  @ApiResponse({ status: 404, description: "Room not found" })
  async updateRoom(
    @Param("roomId", ParseUUIDPipe) roomId: string,
    @Body() dto: UpdateStudyRoomDto,
    @Query("publicKey") publicKey: string,
  ): Promise<StudyRoomResponseDto> {
    const room = await this.service.updateRoom(roomId, dto, publicKey);
    return this.toRoomResponse(room);
  }

  @Delete(":roomId")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Delete a study room (creator only)" })
  @ApiParam({ name: "roomId", description: "UUID of the study room" })
  @ApiQuery({ name: "publicKey", required: true, description: "Caller's Stellar public key" })
  @ApiResponse({ status: 204, description: "Room deleted" })
  @ApiResponse({ status: 403, description: "Not room creator" })
  @ApiResponse({ status: 404, description: "Room not found" })
  async deleteRoom(
    @Param("roomId", ParseUUIDPipe) roomId: string,
    @Query("publicKey") publicKey: string,
  ): Promise<void> {
    await this.service.deleteRoom(roomId, publicKey);
  }

  // ---------------------------------------------------------------------------
  // Members
  // ---------------------------------------------------------------------------

  @Get(":roomId/members")
  @ApiOperation({ summary: "List room members" })
  @ApiParam({ name: "roomId", description: "UUID of the study room" })
  @ApiResponse({ status: 200, type: [StudyRoomMemberResponseDto] })
  async listMembers(
    @Param("roomId", ParseUUIDPipe) roomId: string,
  ): Promise<StudyRoomMemberResponseDto[]> {
    const members = await this.service.listMembers(roomId);
    return members.map(this.toMemberResponse);
  }

  @Post(":roomId/members")
  @ApiOperation({ summary: "Join a study room" })
  @ApiParam({ name: "roomId", description: "UUID of the study room" })
  @ApiQuery({ name: "publicKey", required: true, description: "Caller's Stellar public key" })
  @ApiResponse({ status: 201, type: StudyRoomMemberResponseDto })
  @ApiResponse({ status: 409, description: "Already a member" })
  async joinRoom(
    @Param("roomId", ParseUUIDPipe) roomId: string,
    @Query("publicKey") publicKey: string,
  ): Promise<StudyRoomMemberResponseDto> {
    const member = await this.service.joinRoom(roomId, publicKey);
    return this.toMemberResponse(member);
  }

  @Delete(":roomId/members/me")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Leave a study room" })
  @ApiParam({ name: "roomId", description: "UUID of the study room" })
  @ApiQuery({ name: "publicKey", required: true, description: "Caller's Stellar public key" })
  @ApiResponse({ status: 204, description: "Left the room" })
  @ApiResponse({ status: 404, description: "Not a member" })
  async leaveRoom(
    @Param("roomId", ParseUUIDPipe) roomId: string,
    @Query("publicKey") publicKey: string,
  ): Promise<void> {
    await this.service.leaveRoom(roomId, publicKey);
  }

  // ---------------------------------------------------------------------------
  // Messages
  // ---------------------------------------------------------------------------

  @Get(":roomId/messages")
  @ApiOperation({ summary: "List messages in a study room (newest first)" })
  @ApiParam({ name: "roomId", description: "UUID of the study room" })
  @ApiQuery({ name: "page", required: false, type: Number, example: 1 })
  @ApiQuery({ name: "limit", required: false, type: Number, example: 50 })
  @ApiResponse({ status: 200, type: MessageListResponseDto })
  async listMessages(
    @Param("roomId", ParseUUIDPipe) roomId: string,
    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query("limit", new DefaultValuePipe(50), ParseIntPipe) limit = 50,
  ): Promise<MessageListResponseDto> {
    const result = await this.service.listMessages(roomId, page, limit);

    return {
      items: result.items.map(this.toMessageResponse),
      total: result.total,
      page: result.page,
      limit: result.limit,
    };
  }

  @Post(":roomId/messages")
  @ApiOperation({ summary: "Send a message to a study room (members only)" })
  @ApiParam({ name: "roomId", description: "UUID of the study room" })
  @ApiQuery({ name: "publicKey", required: true, description: "Caller's Stellar public key" })
  @ApiResponse({ status: 201, type: StudyRoomMessageResponseDto })
  @ApiResponse({ status: 403, description: "Not a member of the room" })
  async sendMessage(
    @Param("roomId", ParseUUIDPipe) roomId: string,
    @Body() dto: SendMessageDto,
    @Query("publicKey") publicKey: string,
  ): Promise<StudyRoomMessageResponseDto> {
    const message = await this.service.sendMessage(roomId, publicKey, dto.content);
    return this.toMessageResponse(message);
  }

  @Delete(":roomId/messages/:messageId")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Delete own message" })
  @ApiParam({ name: "roomId", description: "UUID of the study room" })
  @ApiParam({ name: "messageId", description: "UUID of the message" })
  @ApiQuery({ name: "publicKey", required: true, description: "Caller's Stellar public key" })
  @ApiResponse({ status: 204, description: "Message deleted" })
  @ApiResponse({ status: 403, description: "Not message author" })
  @ApiResponse({ status: 404, description: "Message not found" })
  async deleteMessage(
    @Param("roomId", ParseUUIDPipe) roomId: string,
    @Param("messageId", ParseUUIDPipe) messageId: string,
    @Query("publicKey") publicKey: string,
  ): Promise<void> {
    await this.service.deleteMessage(roomId, messageId, publicKey);
  }

  // ---------------------------------------------------------------------------
  // Private mappers
  // ---------------------------------------------------------------------------

  private toRoomResponse(room: RoomWithMemberCount): StudyRoomResponseDto {
    const dto = new StudyRoomResponseDto();
    dto.id = room.id;
    dto.topic = room.topic;
    dto.name = room.name;
    dto.description = room.description;
    dto.tags = room.tags;
    dto.status = room.status;
    dto.maxParticipants = room.maxParticipants;
    dto.createdByPublicKey = room.createdByPublicKey;
    dto.memberCount = room.memberCount;
    dto.createdAt = room.createdAt;
    dto.updatedAt = room.updatedAt;
    return dto;
  }

  private toMemberResponse(member: StudyRoomMember): StudyRoomMemberResponseDto {
    const dto = new StudyRoomMemberResponseDto();
    dto.id = member.id;
    dto.roomId = member.roomId;
    dto.publicKey = member.publicKey;
    dto.joinedAt = member.joinedAt;
    return dto;
  }

  private toMessageResponse(message: StudyRoomMessage): StudyRoomMessageResponseDto {
    const dto = new StudyRoomMessageResponseDto();
    dto.id = message.id;
    dto.roomId = message.roomId;
    dto.senderPublicKey = message.senderPublicKey;
    dto.content = message.content;
    dto.createdAt = message.createdAt;
    dto.editedAt = message.editedAt;
    return dto;
  }
}
