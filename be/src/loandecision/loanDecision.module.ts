import { Module, forwardRef } from '@nestjs/common';
import { LoanDecisionService } from './loanDecision.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { loanDecision } from './entities/loanDecision.entity';
import { LoanDecisionController } from './loanDecision.controller';

@Module({
    providers: [LoanDecisionService],
    imports: [TypeOrmModule.forFeature([loanDecision])],
    exports: [LoanDecisionService],
  controllers: [LoanDecisionController]
})
export class LoanDecisionModule {}
