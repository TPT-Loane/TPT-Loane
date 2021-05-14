import { Role } from '../roles/user.roles';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInputDTO {
  @IsNotEmpty() @Field() username: string;
  @IsNotEmpty() @Field() password: string;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty() @Field() phone: string;
  @IsNotEmpty() @Field() full_name: string;
  @IsNotEmpty() @Field() role: Role;
  @IsNotEmpty() @Field() personal_code: string;
}
