import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { ProductService } from 'src/product/product.service';
import { Connection, Repository } from 'typeorm';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
    private readonly connection: Connection,
    private readonly productRepository: ProductService,
  ) {}

  async createItem(createItemInput: CreateItemInput) {
    let product: Product;
    if (createItemInput.productId) {
      product = await this.productRepository.findOne(createItemInput.productId);
      if (!product) {
        throw new NotFoundException(
          `Product with id #${createItemInput.productId} not found (parent parameter)`,
        );
      }
    }

    const newItem = this.itemRepository.create({
      ...createItemInput,
      product,
    });

    return this.itemRepository.save(newItem);
  }

  findAll() {
    return this.itemRepository.find({});
  }

  async findOne(id: number) {
    const item = await this.itemRepository.findOne(id);
    if (!item) throw new NotFoundException(`Item #${id} not found`);
    return item;
  }

  async getItemByNoteId(noteId: number) {
    const item = await this.connection
      .getRepository(Item)
      .createQueryBuilder('item')
      .leftJoinAndSelect('item.notes', 'note')
      .where('note.id = :id', { id: noteId })
      .getOne();

    console.log(item);

    return item;
  }

  update(updateLoanItemInput: UpdateItemInput): Promise<Item> {
    return this.itemRepository.save(updateLoanItemInput);
  }

  remove(id: number) {
    return this.itemRepository.delete(id);
  }

  async getItemsByProductId(productId: number) {
    const product = await this.connection
      .getRepository(Product)
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.items', 'item')
      .where('product.id = :id', { id: productId })
      .getOne();

    if (!product)
      throw new NotFoundException(`Product #${productId} not found`);

    return product.items ? product.items : [];
  }
}
