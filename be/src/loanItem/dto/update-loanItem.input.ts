import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateLoanItemInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  desc: string;
}
