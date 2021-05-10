import { Role } from '../roles/user.roles';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty() username: string;
  @IsNotEmpty() password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty() phone: string;
  @IsNotEmpty() full_name: string;
  @IsNotEmpty() role: Role;
  @IsNotEmpty() registration_date: Date;
  @IsNotEmpty() personal_code: string;
}
