import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoanItemInput {
  @Field()
  name: string;
  
  @Field()
  desc: string;
}
