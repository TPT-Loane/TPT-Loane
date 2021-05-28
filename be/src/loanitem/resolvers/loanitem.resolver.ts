import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateLoanItemDTO } from "../dto/create.loanitem.dto";
import { LoanItem } from "../entities/loanitem.entity";
import { LoanItemService } from "../service/loanitem.service";

@Resolver(() => LoanItem)
export class LoanItemResolver {
  constructor(
    @Inject(LoanItemService) private loanItemServie: LoanItemService,
  ) {}
  
  @Query(() => [LoanItem], { name: "loanitems" })
  async loanItems(): Promise<LoanItem[]> {
    return await this.loanItemServie.findAll();
  }

  @Query(() => LoanItem, { name: "loanitem" })
  async loanItemById(@Args("id") id: number): Promise<LoanItem> {
      return await this.loanItemServie.findById(id);
  }

  @Mutation(() => LoanItem)
  async createLoanItem(@Args("input") createLoanItemDTO: CreateLoanItemDTO) {
    await this.loanItemServie.createLoanItem(createLoanItemDTO);
  }
}