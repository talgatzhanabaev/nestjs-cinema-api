import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsEmail()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsIn(['admin', 'user'])
  @IsString()
  role?: string;
}
