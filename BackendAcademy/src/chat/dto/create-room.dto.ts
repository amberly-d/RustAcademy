export class CreateRoomDto {
  name?: string;
  type: 'direct' | 'room' | 'course';
  participants: string[];
  courseId?: string;
}