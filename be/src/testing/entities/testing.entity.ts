import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Testing {
  @Field(() => Int,
  { description: 'Example field (placeholder)' })
  exampleField: number;
}
