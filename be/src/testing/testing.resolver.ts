import { Resolver, Mutation } from '@nestjs/graphql';
import { TestingService } from './testing.service';

@Resolver(() => Boolean)
export class TestingResolver {
  constructor(private readonly testingService: TestingService) {}

  @Mutation(() => Boolean)
  AddFakeData() {
    return this.testingService.AddFakeData();
  }
}
