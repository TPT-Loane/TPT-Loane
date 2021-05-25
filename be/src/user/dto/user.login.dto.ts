import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserLoginDTO {
  @Field() readonly username: string;
  @Field() readonly password: string;
}
