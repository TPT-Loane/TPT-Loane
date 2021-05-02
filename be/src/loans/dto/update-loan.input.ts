import { CreateLoanInput } from './create-loan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLoanInput extends PartialType(CreateLoanInput) {
  @Field(() => Int)
  loanItemId: number;
  
  @Field(() => String)
  dateFrom: string;

  @Field(() => String)
  dateTo: string;
}
