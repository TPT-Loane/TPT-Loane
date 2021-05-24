import { Test, TestingModule } from '@nestjs/testing';
import { LoanItemsResolver } from './loan-items.resolver';
import { LoanItemService } from './loan-items.service';

describe('LoanItemsResolver', () => {
  let resolver: LoanItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanItemsResolver, LoanItemService],
    }).compile();

    resolver = module.get<LoanItemsResolver>(LoanItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
