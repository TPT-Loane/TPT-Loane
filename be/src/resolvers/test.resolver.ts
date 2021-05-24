import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { TestModel } from '../models/test.model';
import { TestService } from '../service/test.service';

@Resolver(() => TestModel)
export class TestResolver {
  constructor(@Inject(TestService) private testService: TestService) {}

  @Query(() => TestModel)
  async item(@Args('id') id: string): Promise<TestModel> {
    return await this.testService.findById(id);
  }

  @Query(() => [TestModel])
  async items(): Promise<TestModel[]> {
    return await this.testService.findAll();
  }
  @Mutation(() => TestModel)
  async createItem(@Args('name') name: string): Promise<TestModel> {
    return this.testService.create({ name });
  }
}
