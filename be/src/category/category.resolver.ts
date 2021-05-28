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

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
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
}
