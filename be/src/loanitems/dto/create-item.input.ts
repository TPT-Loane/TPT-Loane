import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateItemInput {
    @Field()
    name: string;
    
    @Field()
    desc: string;

    @Field(type => Int)
    loanId: number
}