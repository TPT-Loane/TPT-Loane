import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './entities/note.entity';
import { CreateNoteInput } from './dto/create-note.input';

@Resolver(() => Note)
export class NoteResolver {
  constructor(@Inject(NoteService) private noteService: NoteService) {}

  @Query(returns => Note)
  async note(@Args('id') id: number): Promise<Note> {
    return await this.noteService.findOne(id);
  }

  @Query(returns => [Note])
  async notes() {
    return await this.noteService.findAll();
  }
  @Mutation(returns => Note)
  async createNote(@Args('createNoteInput') createNoteInput: CreateNoteInput) {
    return this.noteService.createNote(createNoteInput);
  }
}
