export class CreateRoomDto {
  name?: string;
  type: 'direct' | 'room';
  participants: string[];
}
