import { CreateLoanInput } from './create-loan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLoanInput extends PartialType(CreateLoanInput) {
  @Field()
  dateFrom: string;

  @Field()
  dateTo: string;

  @Field(type => Int)
  loanItemId: number;
}
