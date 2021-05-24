import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  
  @Field(() => String)
  description: string;

  
  @Field(() => String)
  specs: string;

  
}
