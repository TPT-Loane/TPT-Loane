import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserService } from "src/user/service/user.service";
import { Repository } from "typeorm";
import { UpdateLoanDTO } from "../dto/loan.update.dto";
import { Loan } from "../entities/loan.entity";

@Injectable()
export class LoanService {
  constructor( 
    @InjectRepository(Loan) private readonly loanRepository: Repository<Loan>,
    private readonly userService: UserService,
  ) {}

    async createOrUpdateLoan(id: number, updateLoan: UpdateLoanDTO, userId: number): Promise<Loan> {
      const user = await this.userService.findById(userId);
      const loan = await this.findById(id) || await this.loanRepository.create();
      return await this.loanRepository.save({ ...loan, ...updateLoan, user });
    }

    async findAll(): Promise<Loan[]> {
      return await this.loanRepository.find();
    }

    async findById(id: number): Promise<Loan> {
      return await this.loanRepository.findOne(id);
    }

    async findByUser(id: number): Promise<Loan[]> {
      const user = await this.userService.findById(id);
      return await this.loanRepository.find({ user })
    }
}
