export type StudyRoomStatus = "active" | "archived";

export interface StudyRoom {
  id: string;
  topic: string;
  name: string;
  description: string | null;
  tags: string[];
  status: StudyRoomStatus;
  maxParticipants: number | null;
  createdByPublicKey: string;
  createdAt: string;
  updatedAt: string;
}

export interface StudyRoomMember {
  id: string;
  roomId: string;
  publicKey: string;
  joinedAt: string;
}

export interface StudyRoomMessage {
  id: string;
  roomId: string;
  senderPublicKey: string;
  content: string;
  createdAt: string;
  editedAt: string | null;
}
