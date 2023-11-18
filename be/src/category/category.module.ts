import { Category } from './entities/category.entity';
import { forwardRef, Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'src/product/product.module';

@Module({
  providers: [CategoryResolver, CategoryService],
  imports: [
    TypeOrmModule.forFeature([Category]),
    forwardRef(() => ProductModule),
  ],
  exports: [CategoryService],
})
export class CategoryModule {}
