import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoanInput {
  @Field()
  dateFrom: string;

  @Field()
  dateTo: string;

  @Field(() => Int)
  loanItemId: number;
}
 