import { Role } from '../roles/user.roles';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType()
export class CreateUserDTO {
  @IsNotEmpty() @Field() username: string;
  @IsNotEmpty() @Field() password: string;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty() @Field() phone: string;
  @IsNotEmpty() @Field() full_name: string;
  @IsNotEmpty() @Field() role: Role;
  @IsNotEmpty() @Field() registration_date: Date;
  @IsNotEmpty() @Field() personal_code: string;
}
