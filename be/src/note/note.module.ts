import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteResolver } from './note.resolver';
import { Note } from './entities/note.entity';
import { NoteService } from './note.service';
import { ItemModule } from '../item/item.module';
import { ItemService } from 'src/item/item.service';

@Module({
    imports: [TypeOrmModule.forFeature([Note]), ItemModule],
    providers: [NoteResolver, NoteService],
    exports: [NoteService]
})
export class NoteModule {}