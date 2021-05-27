import { Injectable, MethodNotAllowedException } from '@nestjs/common';
import { ItemService } from '../item/item.service';
import { CreateItemInput } from 'src/item/dto/create-item.input';
import { CategoryService } from 'src/category/category.service';
import { CreateCategoryInput } from 'src/category/dto/create-category.input';
import { CreateNoteInput } from 'src/note/dto/create-note.input';
import { NoteService } from 'src/note/note.service';
import { UserService } from 'src/user/service/user.service';
import { CreateUserDTO } from 'src/user/dto/user.create.dto';
import { Role } from 'src/user/roles/user.roles';
import * as faker from 'faker';

@Injectable()
export class TestingService {
  constructor(
    private readonly categoryRepo: CategoryService,
    private readonly itemRepository: ItemService,
    private readonly noteRepo: NoteService,
    private readonly userRepo: UserService,
  ) {}

  async AddFakeData() {
    if (process.env.ADD_FAKE_DATA !== 'TRUE') {
      throw new MethodNotAllowedException(`ADD_FAKE_DATA not set to TRUE`);
    }
    for (let i = 0; i < 3; i++) {
      const item: CreateItemInput = { regCode: faker.datatype.number() };
      const itemObj = await this.itemRepository.createItem(item);

      const category: CreateCategoryInput = {
        name: faker.name.findName(),
        bundelable: faker.datatype.boolean(),
        parentCategoryId: null,
      };
      const categoryObj = await this.categoryRepo.create(category);

      const category2: CreateCategoryInput = {
        name: faker.name.findName(),
        bundelable: faker.datatype.boolean(),
        parentCategoryId: categoryObj.id,
      };
      this.categoryRepo.create(category);
      this.categoryRepo.create(category2);

      const note: CreateNoteInput = {
        content: faker.lorem.text(),
        itemId: itemObj.id,
      };
      this.noteRepo.createNote(note);

      const user: CreateUserDTO = {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        full_name: faker.name.findName(),
        role: Math.floor(Math.random() * 2) === 1 ? Role.Admin : Role.User,
        registration_date: faker.datatype.datetime(),
        personal_code: faker.datatype.number(),
      };
      this.userRepo.create(user);

      console.log('\nitem', item, ' category', category);
      console.log('note', note, 'user', user);
    }

    return true;
  }
}
