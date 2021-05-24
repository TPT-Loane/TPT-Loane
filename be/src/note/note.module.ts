import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteResolver } from './note.resolver';
import { Note } from './entities/note.entity';
import { NoteService } from './note.service';
import { ItemService } from 'src/item/item.service';
import { ItemModule } from 'src/item/item.module';

@Module({
  imports: [TypeOrmModule.forFeature([Note]), ItemModule],
  providers: [NoteResolver, NoteService],
})
export class NoteModule {}
