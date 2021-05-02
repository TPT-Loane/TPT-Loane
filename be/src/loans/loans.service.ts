import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoanInput } from './dto/create-loan.input';
import { UpdateLoanInput } from './dto/update-loan.input';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoansService {
  constructor(@InjectRepository(Loan) private loanRepository: Repository<Loan>) {}
  create(createLoanInput: CreateLoanInput): Promise<Loan> {
    const newLoan = this.loanRepository.create(createLoanInput);
    return this.loanRepository.save(newLoan);
  }

  findAll(): Promise<Loan[]> {
    return this.loanRepository.find();
  }

  findOne(id: number): Promise<Loan> {
    return this.loanRepository.findOne(id);
  }

  update(updateLoanInput: UpdateLoanInput): Promise<Loan> {
    return this.loanRepository.save(updateLoanInput);
  }

  remove(id: number) {
    return this.loanRepository.delete(id);
  }
}
