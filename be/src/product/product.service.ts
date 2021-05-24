import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

  create(createProductInput: CreateProductInput): Promise<Product> {
    const newProductItem = this.productRepository.create(createProductInput);
    return this.productRepository.save(newProductItem);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne(id);
  }

  update(id: number, updateProductInput: UpdateProductInput): Promise<Product> {
    return this.productRepository.save(updateProductInput);
  }

  remove(id: number) {
    return this.productRepository.delete(id)
  }
}
