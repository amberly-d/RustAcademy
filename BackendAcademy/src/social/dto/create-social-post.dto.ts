import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSocialPostDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(5000)
  content: string;
}
