import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { Role } from '../roles/user.roles';

@ObjectType()
export class UserDTO {
  @IsNotEmpty() @Field() readonly id: number;
  @IsNotEmpty() @Field() username: string;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty() @Field() phone: string;
  @IsNotEmpty() @Field() full_name: string;
  @IsNotEmpty() @Field() readonly role: Role;
  @IsNotEmpty() @Field() readonly registration_date: Date;
  @IsNotEmpty() @Field() personal_code: string;
}
