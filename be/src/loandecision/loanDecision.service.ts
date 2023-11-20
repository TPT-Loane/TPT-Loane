import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateLoanDecisionInput } from './dto/create-loanDecision.input';
import { UpdateLoanDecisionUpdate } from './dto/update-loanDecision.input';
import { loanDecision } from './entities/loanDecision.entity';

@Injectable()
export class LoanDecisionService {
    constructor(
        @InjectRepository(loanDecision)
        private loanDecisionRepository: Repository<loanDecision>,
        private readonly connection: Connection,
    ) {}

    create(createLoanDecisionInput: CreateLoanDecisionInput): Promise<loanDecision> {
        const newLoanDecision = this.loanDecisionRepository.create(createLoanDecisionInput);
        return this.loanDecisionRepository.save(newLoanDecision);
    }

    findAll(): Promise<loanDecision[]> {
        return this.loanDecisionRepository.find();
    }

    async findOne(id: number): Promise<loanDecision> {
        const loanDecision = await this.loanDecisionRepository.findOne(id);
        if (!loanDecision) throw new NotFoundException(`loanDecision #${id} not found`);
        return this.loanDecisionRepository.findOne(id);
    }

    async update(id: number, updateLoanDecisionUpdate: UpdateLoanDecisionUpdate,): 
    Promise<loanDecision> {
        const loanDecision = await this.loanDecisionRepository.findOne(id);
        if (!loanDecision) throw new NotFoundException(`loanDecision #${id} not found`);
        return await this.loanDecisionRepository.save(updateLoanDecisionUpdate);
    }

    remove(id: number) {
        return this.loanDecisionRepository.delete(id);
    }
}
