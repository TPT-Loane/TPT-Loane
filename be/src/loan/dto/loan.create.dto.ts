import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateLoanDTO {
  @Field()
  message: string;
}