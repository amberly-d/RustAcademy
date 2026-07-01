import {
  IsString,
  IsOptional,
  IsArray,
  IsIn,
  IsNumber,
  IsNotEmpty,
  MaxLength,
  Min,
  Max,
  ArrayMaxSize,
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";

import type { StudyRoomStatus } from "../entities/study-room.entity";

// ---------------------------------------------------------------------------
// Request DTOs
// ---------------------------------------------------------------------------

export class CreateStudyRoomDto {
  @ApiProperty({
    example: "rust",
    description: "Topic slug that groups this room (e.g. rust, solidity, defi)",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  topic!: string;

  @ApiProperty({ example: "Rust Ownership Deep Dive" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name!: string;

  @ApiPropertyOptional({
    example: "A room for discussing Rust ownership and borrowing",
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @ApiPropertyOptional({
    type: [String],
    example: ["rust", "memory", "ownership"],
    description: "Free-form tags for discoverability",
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMaxSize(10)
  tags?: string[];

  @ApiPropertyOptional({
    example: 50,
    description:
      "Maximum number of participants allowed. Omit for unlimited.",
    minimum: 1,
    maximum: 1000,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(1000)
  @Type(() => Number)
  maxParticipants?: number;
}

export class UpdateStudyRoomDto {
  @ApiPropertyOptional({ example: "Advanced Rust Ownership" })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name?: string;

  @ApiPropertyOptional({ example: "Updated description" })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @ApiPropertyOptional({
    type: [String],
    example: ["rust", "advanced"],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMaxSize(10)
  tags?: string[];

  @ApiPropertyOptional({ enum: ["active", "archived"] })
  @IsOptional()
  @IsIn(["active", "archived"])
  status?: StudyRoomStatus;

  @ApiPropertyOptional({ minimum: 1, maximum: 1000 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(1000)
  @Type(() => Number)
  maxParticipants?: number;
}

export class SendMessageDto {
  @ApiProperty({ example: "Can someone explain lifetimes?" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  content!: string;
}

// ---------------------------------------------------------------------------
// Response DTOs
// ---------------------------------------------------------------------------

export class StudyRoomResponseDto {
  @ApiProperty() id!: string;
  @ApiProperty() topic!: string;
  @ApiProperty() name!: string;
  @ApiPropertyOptional() description!: string | null;
  @ApiProperty({ type: [String] }) tags!: string[];
  @ApiProperty({ enum: ["active", "archived"] }) status!: StudyRoomStatus;
  @ApiPropertyOptional() maxParticipants!: number | null;
  @ApiProperty() createdByPublicKey!: string;
  @ApiProperty() memberCount!: number;
  @ApiProperty() createdAt!: string;
  @ApiProperty() updatedAt!: string;
}

export class StudyRoomMessageResponseDto {
  @ApiProperty() id!: string;
  @ApiProperty() roomId!: string;
  @ApiProperty() senderPublicKey!: string;
  @ApiProperty() content!: string;
  @ApiProperty() createdAt!: string;
  @ApiPropertyOptional() editedAt!: string | null;
}

export class StudyRoomMemberResponseDto {
  @ApiProperty() id!: string;
  @ApiProperty() roomId!: string;
  @ApiProperty() publicKey!: string;
  @ApiProperty() joinedAt!: string;
}

export class StudyRoomListResponseDto {
  @ApiProperty({ type: [StudyRoomResponseDto] }) items!: StudyRoomResponseDto[];
  @ApiProperty() total!: number;
  @ApiProperty() page!: number;
  @ApiProperty() limit!: number;
}

export class MessageListResponseDto {
  @ApiProperty({ type: [StudyRoomMessageResponseDto] })
  items!: StudyRoomMessageResponseDto[];

  @ApiProperty() total!: number;
  @ApiProperty() page!: number;
  @ApiProperty() limit!: number;
}
