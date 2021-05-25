import { Category } from './entities/category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { Connection, Repository } from 'typeorm';
import { UpdateCategoryInput } from './dto/update-category.input';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
    private readonly connection: Connection,
  ) {}

  async create(createCategoryInput: CreateCategoryInput) {
    let parentCategory: Category;
    if (createCategoryInput.parentCategoryId) {
      parentCategory = await this.categoryRepo.findOne(
        createCategoryInput.parentCategoryId,
      );
      if (!parentCategory) {
        throw new NotFoundException(
          `Category #${createCategoryInput.parentCategoryId} not found (parent parameter)`,
        );
      }
    }

    const category = this.categoryRepo.create({
      ...createCategoryInput,
      parentCategory: parentCategory,
    });

    return this.categoryRepo.save(category);
  }

  async findAll() {
    return this.categoryRepo.find({
      relations: ['subCategories'],
    });
  }

  async findParent(id: number) {
    const category = await this.categoryRepo.findOne(id, {
      relations: ['parentCategory'],
    });
    return category.parentCategory;
  }

  async update(id: number, updateCategoryInput: UpdateCategoryInput) {
    const category = await this.categoryRepo.preload({
      id,
      ...updateCategoryInput,
    });
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    return this.categoryRepo.save(category);
  }

  async remove(id: number) {
    const category = await this.categoryRepo.findOne(id);
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    return this.categoryRepo.remove(category);
  }
}
