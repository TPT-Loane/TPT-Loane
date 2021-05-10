import { IsNotEmpty, IsEmail } from 'class-validator';
import { Role } from '../roles/user.roles';

export class UserDTO {
  @IsNotEmpty() readonly id: number;
  @IsNotEmpty() username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty() phone: string;
  @IsNotEmpty() full_name: string;
  @IsNotEmpty() readonly role: Role;
  @IsNotEmpty() readonly registration_date: Date;
  @IsNotEmpty() personal_code: string;
}
