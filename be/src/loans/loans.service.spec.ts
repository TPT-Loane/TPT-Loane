import { Test, TestingModule } from '@nestjs/testing';
import { LoanService } from './loans.service';

describe('LoansService', () => {
  let service: LoanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanService],
    }).compile();

    service = module.get<LoanService>(LoanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
