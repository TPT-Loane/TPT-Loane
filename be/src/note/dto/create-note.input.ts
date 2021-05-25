import { InputType, Field, Int } from '@nestjs/graphql';
@InputType()
export class CreateNoteInput {
  @Field({ description: 'Content of the note' })
  content: string;

  @Field(() => Int, { description: 'Id of the item for relation' })
  itemId: number;
}
