import { Field, InputType } from '@nestjs/graphql';
import { GraphQLInt } from 'graphql';

@InputType()
export class UpdateCategoryInput {
  @Field({ description: 'Name of the category', nullable: true })
  name?: string;

  @Field({
    description: 'Can this category be used in a bundle?',
    nullable: true,
  })
  bundelable?: boolean;

  @Field(() => [GraphQLInt], { nullable: true })
  products: number[] | null;
}
