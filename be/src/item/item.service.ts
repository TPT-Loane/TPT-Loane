import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from 'src/note/entities/note.entity';
import { NoteService } from 'src/note/note.service';
import { Repository } from 'typeorm';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(@InjectRepository(Item) private itemRepository: Repository<Item>, private noteService: NoteService) {}

  createItem(createItemInput: CreateItemInput): Promise<Item> {
    const newItem = this.itemRepository.create(createItemInput);

    return this.itemRepository.save(newItem);
  }

  findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  findOne(id: number): Promise<Item> {
    return this.itemRepository.findOne(id);
  }

  update(updateLoanItemInput: UpdateItemInput): Promise<Item> {
    return this.itemRepository.save(updateLoanItemInput);
  }

  remove(id: number) {
    return this.itemRepository.delete(id);
  }

  getNote(noteId: number): Promise<Note> {
    return this.noteService.findOne(noteId);
  }
}
