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

  @Query((returns) => Note)
  async note(@Args('id') id: number): Promise<Note> {
    return await this.noteService.findOne(id);
  }

  @Query((returns) => [Note])
  async notes() {
    return await this.noteService.findAll();
  }

  @Mutation((returns) => Note)
  async createNote(@Args('createNoteInput') createNoteInput: CreateNoteInput) {
    return this.noteService.createNote(createNoteInput);
  }

  @Mutation((returns) => Note)
  async removeNote(@Args('id', { type: () => Int }) id: number) {
    return this.noteService.remove(id);
  }

  @ResolveField((returns) => Item)
  item(@Parent() note: Note): Promise<Item> {
    return this.noteService.getItemByNoteId(note.id);
  }
}
