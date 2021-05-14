import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNoteInput {
    @Field({description: 'Content of the note'})
    content: string;
}
