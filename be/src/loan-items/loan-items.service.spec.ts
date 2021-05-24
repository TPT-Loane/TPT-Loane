import { Test, TestingModule } from '@nestjs/testing';
import { LoanItemService } from './loan-items.service';

describe('LoanItemsService', () => {
  let service: LoanItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanItemService],
    }).compile();

    service = module.get<LoanItemService>(LoanItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
