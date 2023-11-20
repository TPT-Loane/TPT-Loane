import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Item } from 'src/item/entities/item.entity';
import { ItemService } from 'src/item/item.service';
import { Category } from 'src/category/entities/category.entity';
import { CategoryService } from 'src/category/category.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly itemService: ItemService,
    private readonly categoryService: CategoryService,
  ) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.create(createProductInput);
  }

  @Query(() => [Product])
  products() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  product(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.remove(id);
  }

  @ResolveField('items', () => [Item])
  async getParent(@Parent() currProduct) {
    return this.itemService.getItemsByProductId(currProduct.id);
  }

  @ResolveField(() => [Category], { name: 'categories' })
  resolveCategories(@Parent() product: Product): Promise<Category[]> {
    return this.categoryService.findCategoriesByProductId(product.id);
  }
}
