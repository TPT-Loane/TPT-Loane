import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoanInput } from './dto/create-loan.input';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoansService {
  constructor(@InjectRepository(Loan) private loansRepository: Repository<Loan>) {}

  create(createLoanInput: CreateLoanInput) {
    const newLoan = this.loansRepository.create(createLoanInput)
    
    return this.loansRepository.save(newLoan);
  }

  findAll() {
    return this.loansRepository.find();
  }

  findOne(id: number) {
    return this.loansRepository.findOneOrFail(id)
  }

  // update(id: number, updateLoanInput: UpdateLoanInput) {
  //   return this.loansRepository.update(+id, )
  // }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
