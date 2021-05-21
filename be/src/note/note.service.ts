import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteInput } from './dto/create-note.input';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
  constructor(@InjectRepository(Note) private notesRepository: Repository<Note>) { }

  createNote(createNoteInput: CreateNoteInput): Promise<Note> {
    const newNote = this.notesRepository.create(createNoteInput);

    return this.notesRepository.save(newNote);
  }

  findAll(): Promise<Note[]> {
    return this.notesRepository.find();
  }

  findOne(id: number) {
    return this.notesRepository.findOne(id);
  }

  remove(id: number) {
    return this.notesRepository.delete(id);
  }
  
}
