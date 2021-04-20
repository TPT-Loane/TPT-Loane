import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TestModel } from '../models/test.model';
import { TestDTO } from './test.dto'

@Injectable()
export class TestService {
    constructor(@InjectRepository(TestModel) private testRepository: Repository<TestModel>,) {}

    create(testDTO: TestDTO): Promise<TestModel> {
        return this.testRepository.save(testDTO);
    }

    findAll(): Promise<TestModel[]> {
        return this.testRepository.find();
    }

    findById(id: string): Promise<TestModel> {
        return this.testRepository.findOne(id);
    }
}