import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  @Field()
  regCode: string;
}
