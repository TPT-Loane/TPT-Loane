import { Category } from './entities/category.entity';
import { forwardRef, Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BundleModule } from 'src/bundle/bundle.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), forwardRef(() => BundleModule)],
  providers: [CategoryResolver, CategoryService],
  exports:  [CategoryService]
})
export class CategoryModule {}
