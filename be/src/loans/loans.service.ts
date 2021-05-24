import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoanInput } from './dto/create-loan.input';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan) private loansRepository: Repository<Loan>,
  ) {}

  findOne(id: number): Promise<Loan> {
    return this.loansRepository.findOneOrFail(id);
  }

  // getLoanItem(loanItemId: number): Promise<LoanItem> {
  //   return this.loanItemService.findOne(loanItemId);
  // }

  // finds all loans
  async findAll(): Promise<Loan[]> {
    return this.loansRepository.find();
  }

  // creates a new loan
  createLoan(createLoanInput: CreateLoanInput): Promise<Loan> {
    const newLoan = this.loansRepository.create(createLoanInput);

    return this.loansRepository.save(newLoan);
  }

  deleteAll(loanItemId: number) {
    this.loansRepository.delete({ loanItemId });
    return 'deleted all loans from loanItem';
  }
}