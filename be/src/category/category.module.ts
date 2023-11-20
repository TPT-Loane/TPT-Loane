import { Category } from './entities/category.entity';
import { forwardRef, Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'src/product/product.module';
import { BundleModule } from 'src/bundle/bundle.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]), 
    forwardRef(() => BundleModule),
    forwardRef(() => ProductModule),
  ],
  providers: [CategoryResolver, CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
