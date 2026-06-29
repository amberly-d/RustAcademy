export type ChatType = 'direct' | 'room' | 'course';

export interface ChatRoom {
  id: string;
  name?: string;
  type: ChatType;
  participants: string[];
  createdAt: Date;
  courseId?: string;
}

export interface Message {
  id: string;
  roomId: string;
  senderId: string;
  content: string;
  createdAt: Date;
}