import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateNoteInput {
    @Field()
    @Column({ length: 255, nullable: false })
    content: string;
}
