import {
  Resolver,
  Mutation,
  Args,
  Query,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './entities/note.entity';
import { CreateNoteInput } from './dto/create-note.input';
import { Item } from 'src/item/entities/item.entity';

@Resolver(() => Note)
export class NoteResolver {
  constructor(
    @Inject(forwardRef(() => NoteService)) private noteService: NoteService,
  ) {}

  @Query(() => Note)
  async note(@Args('id') id: number): Promise<Note> {
    return await this.noteService.findOne(id);
  }

  @Query(() => [Note])
  async notes() {
    return await this.noteService.findAll();
  }

  @Mutation(() => Note)
  async createNote(@Args('createNoteInput') createNoteInput: CreateNoteInput) {
    return this.noteService.createNote(createNoteInput);
  }

  @Mutation(() => Note)
  async removeNote(@Args('id', { type: () => Int }) id: number) {
    return this.noteService.remove(id);
  }

  @ResolveField(() => Item)
  item(@Parent() note: Note): Promise<Item> {
    return this.noteService.getItemByNoteId(note.id);
  }
}
