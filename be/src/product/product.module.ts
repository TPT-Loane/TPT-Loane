import { forwardRef, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ItemModule } from 'src/item/item.module';
import { CategoryModule } from 'src/category/category.module';
import { ProductController } from './product.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    forwardRef(() => ItemModule),
    forwardRef(() => CategoryModule),
  ],
  providers: [ProductResolver, ProductService],
  exports: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
