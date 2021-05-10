import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteResolver } from './note.resolver';
import { Note } from './entities/note.entity';
import { NoteService } from './note.service';

@Module({
    imports: [TypeOrmModule.forFeature([Note])],
    providers: [NoteResolver, NoteService],
})
export class NoteModule {}