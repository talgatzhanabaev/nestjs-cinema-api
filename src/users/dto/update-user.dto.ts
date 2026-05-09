import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsEmail()
  @IsString()
  email?: string;

  @IsNotEmpty()
  @IsString()
  password?: string;

  @IsIn(['admin', 'user'])
  @IsString()
  role?: string;
}
