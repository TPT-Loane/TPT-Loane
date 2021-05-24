import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoanInput {
  @Field(() => Int)
  loanItemId: number;

  @Field()
  dateFrom: string;

  @Field()
  dateTo: string;
}