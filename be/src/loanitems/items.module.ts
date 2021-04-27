import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { LoansModule } from '../loans/loans.module';

@Module({
  imports: [TypeOrmModule.forFeature([Item]), LoansModule],
  providers: [ItemsService, ItemsResolver]
})
export class ItemsModule {}
