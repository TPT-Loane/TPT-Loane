import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/item/entities/item.entity';
import { ItemService } from 'src/item/item.service';
import { Repository } from 'typeorm';
import { CreateNoteInput } from './dto/create-note.input';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
  constructor(@InjectRepository(Note) private readonly notesRepository: Repository<Note>, private readonly itemRepository: ItemService) { }

  async createNote(createNoteInput: CreateNoteInput) {
    let item: Item;
    if (createNoteInput.itemId) {
      item = await this.itemRepository.findOne(
        createNoteInput.itemId,
      );
      if (!item) {
        throw new NotFoundException(
          `Item with id #${createNoteInput.itemId} not found (parent parameter)`,
        );
      }
    }

    const newNote = this.notesRepository.create({
      ...createNoteInput, 
      item,
    });
    
    return this.notesRepository.save(newNote);
  }

  findAll() {
    return this.notesRepository.find();
  }

  findOne(id: number) {
    return this.notesRepository.findOne(id);
  }

  remove(id: number) {
    return this.notesRepository.delete(id);
  }

  getItemByNoteId(noteId: number) {
    return this.itemRepository.getItemByNoteId(noteId);
  }
  
}