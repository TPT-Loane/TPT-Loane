import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateLoanInput {
  @Field(() => Int)
  loanItemId: number;

  @Field()
  dateFrom: string;

  @Field()
  dateTo: string;
}
