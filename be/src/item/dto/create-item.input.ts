import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  @Field()
  regCode: string;

  @Field(() => Int)
  productId: number;
}
