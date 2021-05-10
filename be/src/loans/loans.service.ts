import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoanInput } from './dto/create-loan.input';
import { UpdateLoanInput } from './dto/update-loan.input';
import { Loans } from './entities/loan.entity';

@Injectable()
export class LoansService {
  constructor(@InjectRepository(Loans) private loansRepository: Repository<Loans>) {}

  create(createLoanInput: CreateLoanInput): Promise<Loans> {
    const newLoan = this.loansRepository.create(createLoanInput);

    return this.loansRepository.save(newLoan);
  }

  findAll(): Promise<Loans[]> {
    return this.loansRepository.find();
  }

  findOne(id: number): Promise<Loans> {
    return this.loansRepository.findOne(id);
  }

  update(updateLoanInput: UpdateLoanInput): Promise<Loans> {
    return this.loansRepository.save(updateLoanInput);
  }

  remove(id: number) {
    return this.loansRepository.delete(id);
  }
}
