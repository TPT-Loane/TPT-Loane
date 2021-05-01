import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanModule } from '../loan/loan.module';
import { LoanItem } from '../loanItem/entities/loan-item.entity';
import { LoanItemResolver } from './loan-item.resolver';
import { LoanItemService } from './loan-item.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoanItem]), LoanModule],
  providers: [LoanItemService, LoanItemResolver],
})
export class LoanItemModule {}
