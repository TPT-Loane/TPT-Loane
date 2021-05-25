import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  specs: string;
}
