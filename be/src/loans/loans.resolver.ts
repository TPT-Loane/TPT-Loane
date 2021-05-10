import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoansService } from './loans.service';
import { Loans } from './entities/loan.entity';
import { CreateLoanInput } from './dto/create-loan.input';
import { UpdateLoanInput } from './dto/update-loan.input';

@Resolver(() => Loans)
export class LoansResolver {
  constructor(private loansService: LoansService) {}

  @Mutation(() => Loans)
  createLoan(@Args('createLoanInput') createLoanInput: CreateLoanInput) {
    return this.loansService.create(createLoanInput);
  }

  @Query(() => [Loans])
  findAllLoans() {
    return this.loansService.findAll();
  }

  @Query(() => Loans)
  findOneLoan(@Args('id', { type: () => Int }) id: number) {
    return this.loansService.findOne(id);
  }

  @Mutation(() => Loans)
  updateLoan(@Args('updateLoanInput') updateLoanInput: UpdateLoanInput) {
    return this.loansService.update(updateLoanInput);
  }

  @Mutation(() => Loans)
  removeLoan(@Args('id', { type: () => Int }) id: number) {
    return this.loansService.remove(id);
  }
}
