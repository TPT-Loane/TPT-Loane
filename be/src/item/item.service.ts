import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
    private readonly connection: Connection,
  ) {}

  createItem(createItemInput: CreateItemInput): Promise<Item> {
    const newItem = this.itemRepository.create(createItemInput);

    return this.itemRepository.save(newItem);
  }

  findAll() {
    return this.itemRepository.find({});
  }

  findOne(id: number) {
    return this.itemRepository.findOne(id);
  }

  async getItemByNoteId(noteId: number) {
    const note = await this.connection
      .getRepository(Item)
      .createQueryBuilder('item')
      .leftJoinAndSelect('item.notes', 'note')
      .where('note.id = :id', { id: noteId })
      .getOne();

    console.log(note);

    return note;
  }

  update(updateLoanItemInput: UpdateItemInput): Promise<Item> {
    return this.itemRepository.save(updateLoanItemInput);
  }

  remove(id: number) {
    return this.itemRepository.delete(id);
  }
}
