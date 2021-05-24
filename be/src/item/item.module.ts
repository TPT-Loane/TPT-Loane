import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { NoteModule } from 'src/note/note.module';
import { NoteService } from 'src/note/note.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemResolver, ItemService],
  exports: [ItemService],
})
export class ItemModule {}
