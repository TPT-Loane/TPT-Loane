import { Test, TestingModule } from '@nestjs/testing';
import { LoanItemsService } from './loan-items.service';

describe('LoanItemsService', () => {
  let service: LoanItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanItemsService],
    }).compile();

    service = module.get<LoanItemsService>(LoanItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
