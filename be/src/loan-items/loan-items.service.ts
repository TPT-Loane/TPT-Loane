import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoanItemInput } from './dto/create-loan-item.input';
import { UpdateLoanItemInput } from './dto/update-loan-item.input';
import { LoanItem } from './entities/loan-item.entity';

@Injectable()
export class LoanItemsService {
  constructor(@InjectRepository(LoanItem) private loanItemsRepository: Repository<LoanItem>) {}
  create(createLoanItemInput: CreateLoanItemInput): Promise<LoanItem> {
    const newLoanItem = this.loanItemsRepository.create(createLoanItemInput);
    return this.loanItemsRepository.save(newLoanItem);
  }

  findAll(): Promise<LoanItem[]> {
    return this.loanItemsRepository.find();
  }

  findOne(id: number): Promise<LoanItem> {
    return this.loanItemsRepository.findOne(id);
  }

  update(updateLoanItemInput: UpdateLoanItemInput): Promise<LoanItem> {
    return this.loanItemsRepository.save(updateLoanItemInput);
  }

  remove(id: number) {
    return this.loanItemsRepository.delete(id);
  }
}
