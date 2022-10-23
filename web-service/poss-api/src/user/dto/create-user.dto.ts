import { IsEmail } from 'class-validator';

export class CreateUserDto {
  nome: string;

  @IsEmail()
  email: string;

  password: string;
  name: string;
}
