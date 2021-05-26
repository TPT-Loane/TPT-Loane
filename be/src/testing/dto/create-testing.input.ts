import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTestingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
