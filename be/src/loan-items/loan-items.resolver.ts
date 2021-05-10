import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { LoanItemsService } from './loan-items.service';
import { LoanItems } from './entities/loan-item.entity';
import { CreateLoanItemInput } from './dto/create-loan-item.input';
import { UpdateLoanItemInput } from './dto/update-loan-item.input';
import { Loans } from 'src/loans/entities/loan.entity';

@Resolver(() => LoanItems)
export class LoanItemsResolver {
  constructor(private readonly loanItemsService: LoanItemsService) {}

  @Mutation(returns => LoanItems)
  createLoanItem(@Args('createLoanItemInput') createLoanItemInput: CreateLoanItemInput): Promise<LoanItems> {
    return this.loanItemsService.createLoanItem(createLoanItemInput);
  }

  @Query(() => [LoanItems])
  findAllLoanItems() {
    return this.loanItemsService.findAll();
  }

  @Query(() => LoanItems)
  findOneLoanItem(@Args('id', { type: () => Int }) id: number) {
    return this.loanItemsService.findOne(id);
  }

  @Mutation(() => LoanItems)
  updateLoanItem(@Args('updateLoanItemInput') updateLoanItemInput: UpdateLoanItemInput) {
    return this.loanItemsService.update(updateLoanItemInput);
  }

  @Mutation(() => LoanItems)
  removeLoanItem(@Args('id', { type: () => Int }) id: number) {
    return this.loanItemsService.remove(id);
  }

  // @ResolveField(returns => Loans)
  // loans(@Parent() loanItems: LoanItems): Promise<Loans> {
  //   return this.loanItemsService.getLoans(loanItems.loanId)
  // }
}
