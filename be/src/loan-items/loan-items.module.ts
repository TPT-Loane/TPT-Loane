import { Module } from '@nestjs/common';
import { LoanItemsService } from './loan-items.service';
import { LoanItemsResolver } from './loan-items.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanItems } from './entities/loan-item.entity';
import { LoansService } from 'src/loans/loans.service';
import { LoansModule } from 'src/loans/loans.module';

@Module({
  imports: [TypeOrmModule.forFeature([LoanItems]), LoansModule],
  providers: [LoanItemsResolver, LoanItemsService],
})
export class LoanItemsModule {}