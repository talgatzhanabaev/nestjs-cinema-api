import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  price!: number;

  @IsNumber()
  seat!: number;

  @IsString()
  movieId!: string;

  @IsString()
  movieTitle!: string;

  @IsNotEmpty()
  @IsDateString()
  startTime!: string;

  @IsNumber()
  userId!: number;

  @IsNumber()
  hallId!: number;
}
