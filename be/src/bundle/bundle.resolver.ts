import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { BundleService } from './bundle.service';
import { Bundle } from './entities/bundle.entity';
import { CreateBundleInput } from './dto/create-bundle.input';
import { UpdateBundleInput } from './dto/update-bundle.input';
import { Category } from 'src/category/entities/category.entity';
import { CategoryService } from 'src/category/category.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@Resolver(() => Bundle)
export class BundleResolver {
  constructor(private readonly bundleService: BundleService, private readonly categoryService: CategoryService,) {}

  @Mutation(() => Bundle)
  createBundle(@Args('createBundleInput') createBundleInput: CreateBundleInput) {
    return this.bundleService.createBundle(createBundleInput);
  }

  @Query(() => [Bundle], { name: 'bundles' })
  findAll() {
    return this.bundleService.findAll();
  }

  @Query(() => Bundle, { name: 'bundle' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bundleService.findOne(id);
  }

  @Mutation(() => Bundle)
  updateBundle(
    @Args('id', { type: () => Int}) id: number,
    @Args('updateBundleInput') updateBundleInput: UpdateBundleInput) {
    return this.bundleService.update(updateBundleInput, id);
  }

  @Mutation(() => Bundle)
  removeBundle(@Args('id', { type: () => Int }) id: number) {
    return this.bundleService.remove(id);
  }

  @ResolveField(() => [Category], {name: "categories"})
  resolveCategories(@Parent() bundle: Bundle): Promise<Category[]> {
    return this.categoryService.findCategoriesByBundleId(bundle.id);
  }
}
