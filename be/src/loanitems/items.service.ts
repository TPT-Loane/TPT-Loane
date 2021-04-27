import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Loan } from '../loans/entities/loan.entity';
import { LoansService } from 'src/loans/loans.service';
import { Repository } from 'typeorm';
import { CreateItemInput } from './dto/create-item.input';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
    constructor(@InjectRepository(Item) private itemsRepository: Repository<Item>, private loansService: LoansService) {}

    createItem(createItemInput: CreateItemInput): Promise<Item> {
        const newItem = this.itemsRepository.create(createItemInput);

        return this.itemsRepository.save(newItem);
    }

    async findAll(): Promise<Item[]> {
        return this.itemsRepository.find();
    }

    async findById(id: number): Promise<Item> {
        return this.itemsRepository.findOneOrFail(id);
    }

    async deleteById(id: number): Promise<void> {
        await this.itemsRepository.delete(id);
    }

    getLoans(loanId: number): Promise<Loan> {
        return this.loansService.findOne(loanId)
    }
}
