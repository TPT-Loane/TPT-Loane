import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoanDecisionService } from './loanDecision.service';
import { loanDecision } from './entities/loanDecision.entity';
import { CreateLoanDecisionInput } from './dto/create-loanDecision.input';
import { UpdateLoanDecisionUpdate } from './dto/update-loanDecision.input';
import { Inject } from '@nestjs/common';

@Resolver(() => loanDecision)
export class ItemResolver {
  constructor(@Inject(LoanDecisionService) private loanDecisionService: LoanDecisionService) {}

  @Mutation(() => loanDecision)
  createItem(@Args('createItemInput') createItemInput: CreateLoanDecisionInput) {
    return this.loanDecisionService.create(createItemInput);
  }

  @Query(() => [loanDecision])
  items() {
    return this.loanDecisionService.findAll(); 
  }

  @Query(() => loanDecision, { name: 'item' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.loanDecisionService.findOne(id);
  }

  @Mutation(() => loanDecision)
  updateItem(@Args('updateItemInput') updateLoanDecisionUpdate: UpdateLoanDecisionUpdate,
  @Args("id") id: number,) {
    return this.loanDecisionService.update(id, updateLoanDecisionUpdate);
  }

  @Mutation(() => loanDecision)
  removeItem(@Args('id', { type: () => Int }) id: number) {
    return this.loanDecisionService.remove(id);
  }
}
