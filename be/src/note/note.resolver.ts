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
import { ItemService } from 'src/item/item.service';

@Resolver(() => Note)
export class NoteResolver {
  constructor(
    @Inject(forwardRef(() => NoteService)) private noteService: NoteService, 
    private readonly itemRepository: ItemService,
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
    return this.itemRepository.getItemByNoteId(note.id);
  }
}
