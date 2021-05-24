import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateItemInput {
  @Field()
  regCode: string;
}
