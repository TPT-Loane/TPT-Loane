import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TestModel } from '../models/test.model';
import { TestService } from './test.service';
import { TestResolver } from '../resolvers/test.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([TestModel])],
    providers: [TestService, TestResolver],
    exports: [TestService]
})
export class TestModule {}