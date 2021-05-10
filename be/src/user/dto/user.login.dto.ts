import { IsNotEmpty } from 'class-validator';

export class UserLoginDTO {
  @IsNotEmpty() readonly username: string;
  @IsNotEmpty() readonly password: string;
}
