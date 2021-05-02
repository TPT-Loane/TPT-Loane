import { Module } from '@nestjs/common';
import { LoanItemsService } from './loan-items.service';
import { LoanItemsResolver } from './loan-items.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanItem } from './entities/loan-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanItem])],
  providers: [LoanItemsResolver, LoanItemsService]
})
export class LoanItemsModule {}
