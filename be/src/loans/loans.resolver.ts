import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Loan } from 'src/loans/entities/loan.entity';
import { CreateLoanInput } from 'src/loans/dto/create-loan.input';
import { LoanService } from 'src/loans/loans.service';
import { LoanItem } from 'src/loan-Items/entities/loan-item.entity';

@Resolver()
export class LoanResolver {
  constructor(private loanService: LoanService) {}

  // @Query(() => Loan)
  // loan(@Args('id', { type: () => Int }) id: number): Promise<Loan> {
  //   return this.loanService.findOne(id);
  // }

  @Query(() => [Loan])
  loans(): Promise<Loan[]> {
    return this.loanService.findAll();
  }

  @Mutation(() => Loan)
  createLoan(
    @Args('createLoanInput') createLoanInput: CreateLoanInput,
  ): Promise<Loan> {
    return this.loanService.createLoan(createLoanInput);
  }

  // @ResolveField(() => LoanItem)
  // loanItemLoan(@Parent() loan: Loan): Promise<LoanItem> {
  //   return this.loanService.getLoanItem(loan.loanItemId);
  // }
}