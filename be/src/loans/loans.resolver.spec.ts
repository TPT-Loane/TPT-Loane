import { Test, TestingModule } from '@nestjs/testing';
import { LoansResolver } from './loans.resolver';
import { LoansService } from './loans.service';

describe('LoansResolver', () => {
  let resolver: LoansResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoansResolver, LoansService],
    }).compile();

    resolver = module.get<LoansResolver>(LoansResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
