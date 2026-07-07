import { IsNumber, IsOptional, IsString, IsUUID, Min, Max } from 'class-validator';

export class RateTutorDto {
  @IsUUID()
  raterUserId: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsOptional()
  @IsString()
  review?: string;
}
