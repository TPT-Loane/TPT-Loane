import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field({ description: 'Name of the category' })
  name: string;

  @Field({ description: 'Can this category be used in a bundle?' })
  bundelable: boolean;

  @Field({ description: 'Id of the parent category', nullable: true })
  parentCategoryId?: number;
}
