import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketDto } from './create-ticket.dto';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  @IsNumber()
  price?: number;

  @IsNumber()
  seat?: number;

  @IsString()
  movieId?: string;

  @IsString()
  movieTitle?: string;

  @IsNotEmpty()
  @IsDateString()
  startTime?: string;

  @IsNumber()
  userId?: number;

  @IsNumber()
  hallId?: number;
}
