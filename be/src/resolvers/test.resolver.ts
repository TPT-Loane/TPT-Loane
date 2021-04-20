import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { TestModel } from '../models/test.model';
import { TestService } from '../service/test.service'

@Resolver(of => TestModel)
export class TestResolver {
    
    constructor(@Inject(TestService) private testService: TestService) {}

    @Query(returns => TestModel)
    async item(@Args('id') id: string): Promise<TestModel> {
        return await this.testService.findById(id);
    } 

    @Query(returns => [TestModel])
    async items(): Promise<TestModel[]> {
        return await this.testService.findAll();
    }
    @Mutation(returns => TestModel)
    async createItem(@Args('name') name: string): Promise<TestModel> {
        return this.testService.create({name});
    }
}