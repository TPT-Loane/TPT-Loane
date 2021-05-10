import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Loans } from 'src/loans/entities/loan.entity';
import { LoansService } from 'src/loans/loans.service';
import { Repository } from 'typeorm';
import { CreateLoanItemInput } from './dto/create-loan-item.input';
import { UpdateLoanItemInput } from './dto/update-loan-item.input';
import { LoanItems } from './entities/loan-item.entity';

@Injectable()
export class LoanItemsService {
  constructor(@InjectRepository(LoanItems) private itemsRepository: Repository<LoanItems>, private loansService: LoansService) { }

  createLoanItem(createLoanItemInput: CreateLoanItemInput): Promise<LoanItems> {
    const newLoanItem = this.itemsRepository.create(createLoanItemInput);

    return this.itemsRepository.save(newLoanItem);
  }

  findAll(): Promise<LoanItems[]> {
    return this.itemsRepository.find();
  }

  findOne(id: number): Promise<LoanItems> {
    return this.itemsRepository.findOne(id);
  }

  update(updateLoanItemInput: UpdateLoanItemInput): Promise<LoanItems> {
    return this.itemsRepository.save(updateLoanItemInput);
  }

  remove(id: number) {
    return this.itemsRepository.delete(id);
  }

  //  getLoans(loanId: number): Promise<Loans> {
  //    return this.loansService.findOne(loanId)
  //  }
}
