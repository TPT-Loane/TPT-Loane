import { Injectable } from '@nestjs/common';
import { CreateTestingInput } from './dto/create-testing.input';
import { UpdateTestingInput } from './dto/update-testing.input';
import { Inject } from '@nestjs/common';
import { ItemService } from '../item/item.service';
import { CreateItemInput } from 'src/item/dto/create-item.input';
import { CategoryService } from 'src/category/category.service';
import { CreateCategoryInput } from 'src/category/dto/create-category.input';
import { CreateNoteInput } from 'src/note/dto/create-note.input';
import { NoteService } from 'src/note/note.service';
import { UserService } from 'src/user/service/user.service';
import { CreateUserDTO } from 'src/user/dto/user.create.dto';
import { Role } from 'src/user/roles/user.roles';
var faker = require('faker');

@Injectable()
export class TestingService {
    constructor(
      private readonly categoryRepo: CategoryService,
      private readonly itemRepository: ItemService,
      private readonly noteRepo: NoteService,
      private readonly userRepo: UserService
      
    )
    {
      if(process.env.ADD_FAKE_DATA === "TRUE")
        this.AddFakeData()
      console.log("add fake data ", process.env.ADD_FAKE_DATA)
    }

  create(createTestingInput: CreateTestingInput) {
    return 'This action adds a new testing';
  }

  AddFakeData(){

    for (let i = 0; i < 3; i++) {
      var item : CreateItemInput = {regCode: faker.datatype.number()};
      this.itemRepository.createItem(item)

      var category : CreateCategoryInput = {name: faker.name.findName(), bundelable: faker.datatype.boolean(), parentCategoryId: null}
      this.categoryRepo.create(category)

      var note : CreateNoteInput = {content: faker.lorem.text(), itemId: 1}
      this.noteRepo.createNote(note)
      
      var user : CreateUserDTO = {username: faker.internet.userName(), password: faker.internet.password(),
          email: faker.internet.email(), phone: faker.phone.phoneNumber(), 
          full_name: faker.name.findName(), role: Math.floor(Math.random() * 2) === 1 ? Role.Admin : Role.User,
          registration_date: faker.datatype.datetime(),
          personal_code: faker.datatype.number() }
      this.userRepo.create(user)

      console.log("\nitem",item, " category" ,category)
      console.log("note", note, "user", user)
    }
    
    return "test";
  }

  findAll() {
    return `This action returns all testing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testing`;
  }

  update(id: number, updateTestingInput: UpdateTestingInput) {
    return `This action updates a #${id} testing`;
  }

  remove(id: number) {
    return `This action removes a #${id} testing`;
  }
}
