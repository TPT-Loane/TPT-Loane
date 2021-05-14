import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class UserLoginDTO {
  @IsNotEmpty() @Field() readonly username: string;
  @IsNotEmpty() @Field() readonly password: string;
}
