import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoanInput {
  @Field(type => Date)
  dateFrom: Date;

  @Field(type => Date)
  dateTo: Date;
}
