import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoanItem } from 'src/loanItem/entities/loan-item.entity';
import { CreateLoanItemInput } from 'src/loanItem/dto/create-loanItem.input';
import { LoanItemService } from 'src/loanItem/loan-item.service';
import { UpdateLoanItemInput } from './dto/update-loanItem.input';

@Resolver(() => LoanItem)
export class LoanItemResolver {
  constructor(private loanItemService: LoanItemService) {}

  // Gets one LoanItem
  @Query(() => LoanItem)
  loanItem(@Args('id', { type: () => Int }) id: number): Promise<LoanItem> {
    return this.loanItemService.findOne(id);
  }

  // Gets all LoanItems
  @Query(() => [LoanItem])
  loanItems(): Promise<LoanItem[]> {
    return this.loanItemService.findAll();
  }

  // Creates a LoanItem
  @Mutation(() => LoanItem)
  createLoanItem(
    @Args('createLoanItemInput') createLoanItemInput: CreateLoanItemInput,
  ): Promise<LoanItem> {
    return this.loanItemService.create(createLoanItemInput);
  }

  // Updates a LoanItem
  @Mutation(() => LoanItem)
  updateLoanItem(
    @Args('updateLoanItemInput') updateLoanItemInput: UpdateLoanItemInput,
  ): Promise<LoanItem> {
    return this.loanItemService.update(updateLoanItemInput);
  }

  // Deletes a LoanItem
  @Mutation(() => Boolean)
  async deleteLoanItem(@Args('id') id: number): Promise<boolean> {
    await this.loanItemService.delete(id);
    return true;
  }
}
