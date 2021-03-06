import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateUserDTO } from '../dto/user.create.dto';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    return user;
  }

  async findByUserName(username: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { username } });
    return user;
  }

  async findByPhoneNumber(phone: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { phone } });
    return user;
  }

  async findByPersonalCode(personal_code: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { personal_code },
    });
    return user;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(createUseDto: CreateUserDTO): Promise<User> {
    const salt = 10;
    const hash = await bcrypt.hash(createUseDto.password, salt);
    const user = await this.userRepository.save({
      username: createUseDto.username,
      password: hash,
      email: createUseDto.email,
      phone: createUseDto.phone,
      role: createUseDto.role,
      full_name: createUseDto.full_name,
      registration_date: createUseDto.registration_date,
      personal_code: createUseDto.personal_code,
    });
    return user;
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return result.affected ? true : false;
  }

  async updatePassword(
    previousPassword: string,
    password: string,
    id: number,
  ): Promise<boolean> {
    try {
      const userdata = await this.userRepository.findOne(id);
      if (await bcrypt.compare(previousPassword, userdata.password)) {
        const salt = 10;
        const hash = await bcrypt.hash(password, salt);
        const result = await getConnection()
          .createQueryBuilder()
          .update(User)
          .set({ password: hash })
          .where('id = :id', { id })
          .returning('*')
          .execute()
          .then((response) => {
            return response.raw[0];
          });
        return result ? true : false;
      } else {
        return false;
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}
