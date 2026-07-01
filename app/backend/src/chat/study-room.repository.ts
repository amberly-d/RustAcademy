import { Injectable, Logger } from "@nestjs/common";
import { SupabaseService } from "../supabase/supabase.service";
import type {
  StudyRoom,
  StudyRoomMember,
  StudyRoomMessage,
  StudyRoomStatus,
} from "./entities/study-room.entity";

export interface CreateRoomData {
  topic: string;
  name: string;
  description?: string;
  tags?: string[];
  maxParticipants?: number;
  createdByPublicKey: string;
}

export interface UpdateRoomData {
  name?: string;
  description?: string;
  tags?: string[];
  status?: StudyRoomStatus;
  maxParticipants?: number;
}

export interface RoomFilters {
  topic?: string;
  status?: StudyRoomStatus;
  page?: number;
  limit?: number;
}

@Injectable()
export class StudyRoomRepository {
  private readonly logger = new Logger(StudyRoomRepository.name);

  constructor(private readonly db: SupabaseService) {}

  // ---------------------------------------------------------------------------
  // Rooms
  // ---------------------------------------------------------------------------

  async createRoom(data: CreateRoomData): Promise<StudyRoom> {
    const now = new Date().toISOString();

    const { data: row, error } = await this.db
      .getClient()
      .from("study_rooms")
      .insert({
        topic: data.topic,
        name: data.name,
        description: data.description ?? null,
        tags: data.tags ?? [],
        max_participants: data.maxParticipants ?? null,
        created_by_public_key: data.createdByPublicKey,
        status: "active",
        created_at: now,
        updated_at: now,
      })
      .select()
      .single();

    if (error) {
      this.logger.error("Failed to create study room", error);
      throw error;
    }

    return this.mapRoom(row);
  }

  async findRooms(filters: RoomFilters): Promise<{ items: StudyRoom[]; total: number }> {
    const page = filters.page ?? 1;
    const limit = Math.min(filters.limit ?? 20, 100);
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = this.db
      .getClient()
      .from("study_rooms")
      .select("*", { count: "exact" });

    if (filters.topic) {
      query = query.eq("topic", filters.topic);
    }

    if (filters.status) {
      query = query.eq("status", filters.status);
    } else {
      // Default: only active rooms
      query = query.eq("status", "active");
    }

    const { data, error, count } = await query
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) {
      this.logger.error("Failed to list study rooms", error);
      throw error;
    }

    return {
      items: (data ?? []).map((r) => this.mapRoom(r)),
      total: count ?? 0,
    };
  }

  async findRoomById(id: string): Promise<StudyRoom | null> {
    const { data, error } = await this.db
      .getClient()
      .from("study_rooms")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") return null; // row not found
      this.logger.error(`Failed to fetch room ${id}`, error);
      throw error;
    }

    return data ? this.mapRoom(data) : null;
  }

  async updateRoom(id: string, data: UpdateRoomData): Promise<StudyRoom | null> {
    const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };

    if (data.name !== undefined) patch["name"] = data.name;
    if (data.description !== undefined) patch["description"] = data.description;
    if (data.tags !== undefined) patch["tags"] = data.tags;
    if (data.status !== undefined) patch["status"] = data.status;
    if (data.maxParticipants !== undefined) patch["max_participants"] = data.maxParticipants;

    const { data: row, error } = await this.db
      .getClient()
      .from("study_rooms")
      .update(patch)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      if (error.code === "PGRST116") return null;
      this.logger.error(`Failed to update room ${id}`, error);
      throw error;
    }

    return row ? this.mapRoom(row) : null;
  }

  async deleteRoom(id: string): Promise<void> {
    const { error } = await this.db
      .getClient()
      .from("study_rooms")
      .delete()
      .eq("id", id);

    if (error) {
      this.logger.error(`Failed to delete room ${id}`, error);
      throw error;
    }
  }

  async countMembers(roomId: string): Promise<number> {
    const { count, error } = await this.db
      .getClient()
      .from("study_room_members")
      .select("*", { count: "exact", head: true })
      .eq("room_id", roomId);

    if (error) {
      this.logger.warn(`Failed to count members for room ${roomId}`, error);
      return 0;
    }

    return count ?? 0;
  }

  // ---------------------------------------------------------------------------
  // Membership
  // ---------------------------------------------------------------------------

  async findMember(roomId: string, publicKey: string): Promise<StudyRoomMember | null> {
    const { data, error } = await this.db
      .getClient()
      .from("study_room_members")
      .select("*")
      .eq("room_id", roomId)
      .eq("public_key", publicKey)
      .single();

    if (error) {
      if (error.code === "PGRST116") return null;
      throw error;
    }

    return data ? this.mapMember(data) : null;
  }

  async addMember(roomId: string, publicKey: string): Promise<StudyRoomMember> {
    const { data, error } = await this.db
      .getClient()
      .from("study_room_members")
      .insert({
        room_id: roomId,
        public_key: publicKey,
        joined_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      this.logger.error(`Failed to add member to room ${roomId}`, error);
      throw error;
    }

    return this.mapMember(data);
  }

  async removeMember(roomId: string, publicKey: string): Promise<void> {
    const { error } = await this.db
      .getClient()
      .from("study_room_members")
      .delete()
      .eq("room_id", roomId)
      .eq("public_key", publicKey);

    if (error) {
      this.logger.error(`Failed to remove member from room ${roomId}`, error);
      throw error;
    }
  }

  async listMembers(roomId: string): Promise<StudyRoomMember[]> {
    const { data, error } = await this.db
      .getClient()
      .from("study_room_members")
      .select("*")
      .eq("room_id", roomId)
      .order("joined_at", { ascending: true });

    if (error) {
      this.logger.error(`Failed to list members of room ${roomId}`, error);
      throw error;
    }

    return (data ?? []).map((m) => this.mapMember(m));
  }

  // ---------------------------------------------------------------------------
  // Messages
  // ---------------------------------------------------------------------------

  async createMessage(
    roomId: string,
    senderPublicKey: string,
    content: string,
  ): Promise<StudyRoomMessage> {
    const now = new Date().toISOString();

    const { data, error } = await this.db
      .getClient()
      .from("study_room_messages")
      .insert({
        room_id: roomId,
        sender_public_key: senderPublicKey,
        content,
        created_at: now,
        edited_at: null,
      })
      .select()
      .single();

    if (error) {
      this.logger.error(`Failed to send message in room ${roomId}`, error);
      throw error;
    }

    return this.mapMessage(data);
  }

  async listMessages(
    roomId: string,
    page = 1,
    limit = 50,
  ): Promise<{ items: StudyRoomMessage[]; total: number }> {
    const safeLimit = Math.min(limit, 200);
    const from = (page - 1) * safeLimit;
    const to = from + safeLimit - 1;

    const { data, error, count } = await this.db
      .getClient()
      .from("study_room_messages")
      .select("*", { count: "exact" })
      .eq("room_id", roomId)
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) {
      this.logger.error(`Failed to list messages for room ${roomId}`, error);
      throw error;
    }

    return {
      items: (data ?? []).map((m) => this.mapMessage(m)),
      total: count ?? 0,
    };
  }

  async deleteMessage(messageId: string): Promise<void> {
    const { error } = await this.db
      .getClient()
      .from("study_room_messages")
      .delete()
      .eq("id", messageId);

    if (error) {
      this.logger.error(`Failed to delete message ${messageId}`, error);
      throw error;
    }
  }

  async findMessageById(messageId: string): Promise<StudyRoomMessage | null> {
    const { data, error } = await this.db
      .getClient()
      .from("study_room_messages")
      .select("*")
      .eq("id", messageId)
      .single();

    if (error) {
      if (error.code === "PGRST116") return null;
      throw error;
    }

    return data ? this.mapMessage(data) : null;
  }

  // ---------------------------------------------------------------------------
  // Row mappers
  // ---------------------------------------------------------------------------

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mapRoom(row: any): StudyRoom {
    return {
      id: row.id,
      topic: row.topic,
      name: row.name,
      description: row.description ?? null,
      tags: row.tags ?? [],
      status: row.status,
      maxParticipants: row.max_participants ?? null,
      createdByPublicKey: row.created_by_public_key,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mapMember(row: any): StudyRoomMember {
    return {
      id: row.id,
      roomId: row.room_id,
      publicKey: row.public_key,
      joinedAt: row.joined_at,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mapMessage(row: any): StudyRoomMessage {
    return {
      id: row.id,
      roomId: row.room_id,
      senderPublicKey: row.sender_public_key,
      content: row.content,
      createdAt: row.created_at,
      editedAt: row.edited_at ?? null,
    };
  }
}
