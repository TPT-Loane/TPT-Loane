import { Test, TestingModule } from '@nestjs/testing';
import { LoanResolver } from './loans.resolver';
import { LoanService } from './loans.service';

describe('LoansResolver', () => {
  let resolver: LoanResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanResolver, LoanService],
    }).compile();

    resolver = module.get<LoanResolver>(LoanResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
