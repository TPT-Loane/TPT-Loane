import { Resolver, Mutation, Args, Query, Root } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserService } from '../service/user.service';
import { UserDTO } from '../dto/user.dto';
import { CreateUserDTO } from '../dto/user.create.dto';
import { Role } from '../roles/user.roles';

@Resolver((of) => User)
export class UserResolver {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Query(() => User)
  async userById(@Args('id') id: number): Promise<User> {
    return await this.userService.findById(id);
  }

  @Query(() => User)
  async userByPersonalCode(@Args('id') personal_code: string): Promise<User> {
    return await this.userService.findByPersonalCode(personal_code);
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: number) {
    return await this.userService.delete(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('username') username: string,
    @Args('password') password: string,
    @Args('email') email: string,
    @Args('phone') phone: string,
    @Args('fullname') fullname: string,
    @Args('role') role: Role,
    @Args('personal_code') personal_code: string,
  ): Promise<User> {
    const date = new Date();
    return await this.userService.create({
      username,
      password,
      email,
      phone,
      full_name: fullname,
      role,
      registration_date: date,
      personal_code,
    });
  }
}
