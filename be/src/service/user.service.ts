import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserModel } from '../models/user.model';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel) private userRepository: Repository<UserModel>,
  ) {}

  create(testDTO: UserDTO): Promise<UserModel> {
    return this.userRepository.save(testDTO);
  }

  findAll(): Promise<UserModel[]> {
    return this.userRepository.find();
  }

  findById(id: string): Promise<UserModel> {
    return this.userRepository.findOne(id);
  }
}
