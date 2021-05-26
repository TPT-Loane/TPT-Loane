import { CreateTestingInput } from './create-testing.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTestingInput extends PartialType(CreateTestingInput) {
  @Field(() => Int)
  id: number;
}
