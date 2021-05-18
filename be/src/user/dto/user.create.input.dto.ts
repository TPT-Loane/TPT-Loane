import { Role } from '../roles/user.roles';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInputDTO {
  @Field() username: string;
  @Field() password: string;
  @Field() email: string;
  @Field() phone: string;
  @Field() full_name: string;
  @Field() role: Role;
  @Field() personal_code: string;
}
