import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/item/entities/item.entity';
import { ItemService } from 'src/item/item.service';
import { Repository } from 'typeorm';
import { CreateNoteInput } from './dto/create-note.input';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
  constructor(@InjectRepository(Note) private notesRepository: Repository<Note>,private itemService: ItemService) { }

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

  getItem(itemId: number): Promise<Item> {
    return this.itemService.findOne(itemId);
  }
  
}
