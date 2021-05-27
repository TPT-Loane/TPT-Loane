import { Module } from '@nestjs/common';
import { TestingService } from './testing.service';
import { TestingResolver } from './testing.resolver';
import { ItemModule } from 'src/item/item.module';
import { CategoryModule } from 'src/category/category.module';
import { NoteModule } from 'src/note/note.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [ItemModule, CategoryModule, NoteModule, UserModule],
  providers: [TestingResolver, TestingService],
})
export class TestingModule {}
