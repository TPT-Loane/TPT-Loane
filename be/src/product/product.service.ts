import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) 
  private productRepository: Repository<Product>,
  private readonly connection: Connection
  ) {}

  create(createProductInput: CreateProductInput): Promise<Product> {
    const newProductItem = this.productRepository.create(createProductInput);
    return this.productRepository.save(newProductItem);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if(!product) throw new NotFoundException(`Product #${id} not found`);
    return this.productRepository.findOne(id);
  }

  async update(id: number, updateProductInput: UpdateProductInput): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if(!product) throw new NotFoundException(`Product #${id} not found`);
    return this.productRepository.save(updateProductInput);
  }

  async remove(id: number) {
    const product = await this.productRepository.findOne(id);
    if(!product) throw new NotFoundException(`Product #${id} not found`);
    return this.productRepository.delete(id);
  }

  async findProductsByCategoryId(categoryId: number) {
    const findProductsByCategoryId = await this.connection
      .getRepository(Product)
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.categories", "category")
      .getMany();

    return findProductsByCategoryId;
  }
}
