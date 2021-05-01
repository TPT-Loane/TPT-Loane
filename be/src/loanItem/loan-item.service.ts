import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanItem } from '../loanItem/entities/loan-item.entity';
import { Repository } from 'typeorm';
import { CreateLoanItemInput } from './dto/create-loanItem.input';
import { UpdateLoanItemInput } from './dto/update-loanItem.input';
import { LoanService } from '../loan/loan.service';

@Injectable()
export class LoanItemService {
  constructor(
    @InjectRepository(LoanItem)
    private loanItemsRepository: Repository<LoanItem>,
    private loanService: LoanService,
  ) {}

  // finds one loanItem
  findOne(id: number): Promise<LoanItem> {
    return this.loanItemsRepository.findOneOrFail(id);
  }

  // finds all loanItems
  async findAll(): Promise<LoanItem[]> {
    return this.loanItemsRepository.find();
  }

  // creates a new loanItem
  create(createLoanItemInput: CreateLoanItemInput): Promise<LoanItem> {
    const newLoanItem = this.loanItemsRepository.create(createLoanItemInput);

    return this.loanItemsRepository.save(newLoanItem);
  }

  update(updateLoanItemInput: UpdateLoanItemInput): Promise<LoanItem> {
    return this.loanItemsRepository.save(updateLoanItemInput);
  }

  async delete(id: number) {
    this.loanService.deleteAll(id);
    await this.loanItemsRepository.delete({ id });
    return true;
  }
}
