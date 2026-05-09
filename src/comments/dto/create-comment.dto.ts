import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  userId!: number;

  @IsString()
  text!: string;

  @IsString()
  movieId?: string;
}
