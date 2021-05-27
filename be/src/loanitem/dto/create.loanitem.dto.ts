import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateLoanItemDTO {
  @Field()
  returnDate: Date;
}