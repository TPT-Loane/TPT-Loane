import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoanItemService } from './loan-items.service';
import { LoanItem } from './entities/loan-item.entity';
import { CreateLoanItemInput } from './dto/create-loan-item.input';
import { UpdateLoanItemInput } from './dto/update-loan-item.input';

@Resolver(() => LoanItem)
export class LoanItemsResolver {
  constructor(private readonly loanItemsService: LoanItemService) {}

  @Mutation(() => LoanItem)
  createLoanItem(@Args('createLoanItemInput') createLoanItemInput: CreateLoanItemInput) {
    return this.loanItemsService.create(createLoanItemInput);
  }

  @Query(() => [LoanItem], { name: 'loanItems' })
  findAll() {
    return this.loanItemsService.findAll();
  }

  @Query(() => LoanItem, { name: 'loanItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.loanItemsService.findOne(id);
  }

  @Mutation(() => LoanItem)
  updateLoanItem(@Args('updateLoanItemInput') updateLoanItemInput: UpdateLoanItemInput) {
    return this.loanItemsService.update(updateLoanItemInput.id, updateLoanItemInput);
  }

  @Mutation(() => LoanItem)
  removeLoanItem(@Args('id', { type: () => Int }) id: number) {
    return this.loanItemsService.remove(id);
  }
}
