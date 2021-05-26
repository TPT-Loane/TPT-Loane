import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BundleService } from './bundle.service';
import { Bundle } from './entities/bundle.entity';
import { CreateBundleInput } from './dto/create-bundle.input';
import { UpdateBundleInput } from './dto/update-bundle.input';

@Resolver(() => Bundle)
export class BundleResolver {
  constructor(private readonly bundleService: BundleService) {}

  @Mutation(() => Bundle)
  createBundle(@Args('createBundleInput') createBundleInput: CreateBundleInput) {
    return this.bundleService.createBundle(createBundleInput);
  }

  @Query(() => [Bundle], { name: 'bundle' })
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
}
