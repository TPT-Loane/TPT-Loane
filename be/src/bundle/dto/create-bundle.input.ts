import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBundleInput {
  @Field()
  description: string;
}

