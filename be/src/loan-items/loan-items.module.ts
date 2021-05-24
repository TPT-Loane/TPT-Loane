import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanModule } from '../loans/loans.module';
import { LoanItem } from '../loan-Items/entities/loan-item.entity';
import { LoanItemsResolver } from './loan-items.resolver';
import { LoanItemService } from './loan-items.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoanItem]), LoanModule],
  providers: [LoanItemService, LoanItemsResolver],
})
export class LoanItemModule {}