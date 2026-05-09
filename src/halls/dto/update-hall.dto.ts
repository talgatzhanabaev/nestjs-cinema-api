import { PartialType } from '@nestjs/mapped-types';
import { CreateHallDto } from './create-hall.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateHallDto extends PartialType(CreateHallDto) {
  @IsString()
  name?: string;

  @IsNumber()
  capacity?: number;
}
