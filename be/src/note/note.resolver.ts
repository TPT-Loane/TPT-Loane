import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './entities/note.entity';

@Resolver((of) => Note)
export class NoteResolver {
  constructor(@Inject(NoteService) private noteService: NoteService) {}

  @Query((returns) => Note)
  async item(@Args('id') id: number): Promise<Note> {
    return await this.noteService.findOne(id);
  }

  @Query((returns) => [Note])
  async items(): Promise<Note[]> {
    return await this.noteService.findAll();
  }
  @Mutation((returns) => Note)
  async createItem(@Args('content') content: string): Promise<Note> {
    return this.noteService.createNote({ content });
  }
}
