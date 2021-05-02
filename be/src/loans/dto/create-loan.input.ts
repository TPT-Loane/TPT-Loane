import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoanInput {
  @Field(() => Int)
  loanItemId: number;

  @Field(() => String)
  dateFrom: string;

  @Field(() => String)
  dateTo: string;
}
