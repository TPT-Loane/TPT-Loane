import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansResolver } from './loans.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Loan])],
  providers: [LoansResolver, LoansService]
})
export class LoansModule {}
