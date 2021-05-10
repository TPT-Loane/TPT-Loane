import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../dto/user.create.dto';
import { UserDTO } from '../dto/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  findByUserName(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username: username } });
  }

  findByPhoneNumber(phone: string): Promise<User> {
    return this.userRepository.findOne({ where: { phone: phone } });
  }

  findByPersonalCode(personal_code: string): Promise<User> {
    return this.userRepository.findOne({
      where: { personal_code: personal_code },
    });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(createUseDto: CreateUserDTO): Promise<User> {
    const hashed = createUseDto.password;
    return this.userRepository.save({
      username: createUseDto.username,
      password: hashed,
      email: createUseDto.email,
      phone: createUseDto.phone,
      role: createUseDto.role,
      full_name: createUseDto.full_name,
      registration_date: createUseDto.registration_date,
      personal_code: createUseDto.personal_code,
    });
  }

  async delete(id: number) {
    this.userRepository.delete(id);
  }
}
