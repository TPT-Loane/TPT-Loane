import { CreateLoanItemInput } from './create-loan-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLoanItemInput extends PartialType(CreateLoanItemInput) {
  @Field(() => Int)
  id: number;
}
