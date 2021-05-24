import { Role } from '../roles/user.roles';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDTO {
  @Field() username: string;
  @Field() password: string;

  @Field()
  email: string;

  @Field() phone: string;
  @Field() full_name: string;
  @Field() role: Role;
  @Field() registration_date: Date;
  @Field() personal_code: string;
}
