import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateLoanItemDTO } from "../dto/create.loanitem.dto";
import { LoanItem } from "../entities/loanitem.entity";


export class LoanItemService {
  constructor(@InjectRepository(LoanItem) private readonly loanItemRepository: Repository<LoanItem>){}

  async findAll(): Promise<LoanItem[]> {
    return await this.loanItemRepository.find()
  }

  async findById(id: number): Promise<LoanItem> {
    return await this.loanItemRepository.findOne({ id })
  }

  async createLoanItem(createLoanItem: CreateLoanItemDTO) {
    return await this.loanItemRepository.save({
      ...createLoanItem
    })
  }
}
