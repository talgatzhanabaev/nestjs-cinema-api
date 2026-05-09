import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { IsArray, IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsArray()
  actors?: Array<string>;

  @IsArray()
  genres?: Array<string>;

  @IsArray()
  producers?: Array<string>;

  @IsDate()
  @IsString()
  seance?: string;

  @IsNumber()
  hallId?: number;
}
