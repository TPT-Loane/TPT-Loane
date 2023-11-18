import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Product } from 'src/product/entities/product.entity';
import { ProductService } from 'src/product/product.service';
import { Bundle } from 'src/bundle/entities/bundle.entity';
import { BundleService } from 'src/bundle/bundle.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
    private readonly bundleService: BundleService
  ) {}

  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Mutation(() => Category)
  updateCategory(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoryService.update(id, updateCategoryInput);
  }

  @Mutation(() => Category)
  removeCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.remove(id);
  }

  @ResolveField(() => [Product], { name: 'products' })
  resolveProducts(@Parent() category: Category): Promise<Product[]> {
    return this.productService.findProductsByCategoryId(category.id);
  }
  
  @ResolveField(() => [Bundle], {name: "bundles"})
  resolveBundles(@Parent() category: Category): Promise<Bundle[]> {
    return this.bundleService.findBundlesByCategoryId(category.id);
  }
}
