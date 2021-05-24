import { Module } from '@nestjs/common';
import { LoanService } from './loans.service';
import { LoanResolver } from './loans.resolver';
import { Loan } from '../loans/entities/loan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Loan])],
  providers: [LoanService, LoanResolver],
  exports: [LoanService],
})
export class LoanModule {}