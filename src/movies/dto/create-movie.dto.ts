import { IsArray, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsArray()
  actors!: Array<string>;

  @IsArray()
  genres!: Array<string>;

  @IsArray()
  producers!: Array<string>;

  @IsDate()
  @IsString()
  seance!: string;

  @IsNumber()
  hallId!: number;
}
