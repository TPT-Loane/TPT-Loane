import { Inject } from "@nestjs/common";
import { Resolver ,Query, Args, Mutation } from "@nestjs/graphql";
import { UpdateLoanDTO } from "../dto/loan.update.dto";
import { Loan } from "../entities/loan.entity";
import { LoanService } from "../service/loan.service";

@Resolver(() => Loan)
export class LoanResolver {
  constructor(
    @Inject(LoanService) private readonly loanService: LoanService,
  ) {}

  @Query(() => [Loan], { name: "loans" })
  async loans(): Promise<Loan[]> {
    return await this.loanService.findAll();
  }

  @Query(() => Loan, { name: "loan" })
  async loanById(@Args("id") id: number): Promise<Loan> {
    return await this.loanService.findById(id)
  }
  
  @Query(() => [Loan], { name: "loansByUser"})
  async loansByUser(@Args("userId") id: number): Promise<Loan[]> {
    return await this.loanService.findByUser(id)
  }

  @Mutation(() => Loan)
  async createOrUpdateLoan(
    @Args("input") updateLoan: UpdateLoanDTO,
    @Args("id") id: number,
    @Args("userId") userId: number,
  ): Promise<Loan> {
    return await this.loanService.createOrUpdateLoan(id, updateLoan, userId);
  }
}