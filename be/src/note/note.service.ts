import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
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

  update(updateNoteInput: UpdateNoteInput) {
    return this.notesRepository.save(updateNoteInput);
  }

  remove(id: number) {
    return this.notesRepository.delete(id);
  }

  //  getLoans(loanId: number): Promise<Loans> {
  //    return this.loansService.findOne(loanId)
  //  }
}
