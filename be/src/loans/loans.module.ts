import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansResolver } from './loans.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loans } from './entities/loan.entity';
import { LoanItemsService } from 'src/loan-items/loan-items.service';

@Module({
  imports: [TypeOrmModule.forFeature([Loans])],
  providers: [LoansResolver, LoansService,],
  exports: [LoansService]
})
export class LoansModule {}