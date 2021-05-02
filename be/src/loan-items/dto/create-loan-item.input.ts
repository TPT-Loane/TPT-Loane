import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoanItemInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  desc: string
}
