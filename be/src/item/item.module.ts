import { forwardRef, Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Item]), forwardRef(() => ProductModule)],
  providers: [ItemResolver, ItemService],
  exports: [ItemService],
})
export class ItemModule {}
