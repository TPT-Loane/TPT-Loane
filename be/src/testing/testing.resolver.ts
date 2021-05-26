import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TestingService } from './testing.service';
import { Testing } from './entities/testing.entity';
import { CreateTestingInput } from './dto/create-testing.input';
import { UpdateTestingInput } from './dto/update-testing.input';

@Resolver(() => Testing)
export class TestingResolver {
  constructor(private readonly testingService: TestingService) {}

  @Mutation(() => Testing)
  createTesting(@Args('createTestingInput') createTestingInput: CreateTestingInput) {
    return this.testingService.create(createTestingInput);
  }

  @Mutation(() => Testing)
  AddFakeData() {
    return this.testingService.AddFakeData();
  }

  @Query(() => [Testing], { name: 'testing' })
  findAll() {
    return this.testingService.findAll();
  }

  // @Query(() => Testing, { name: 'testing' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.testingService.findOne(id);
  // }

  // @Mutation(() => Testing)
  // updateTesting(@Args('updateTestingInput') updateTestingInput: UpdateTestingInput) {
  //   return this.testingService.update(updateTestingInput.id, updateTestingInput);
  // }

  // @Mutation(() => Testing)
  // removeTesting(@Args('id', { type: () => Int }) id: number) {
  //   return this.testingService.remove(id);
  // }
}
