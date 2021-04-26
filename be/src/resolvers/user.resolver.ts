import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { UserModel } from '../models/user.model';
import { UserService } from '../service/user.service';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query((returns) => UserModel)
  async user(@Args('id') id: string): Promise<UserModel> {
    return await this.userService.findById(id);
  }

  @Query((returns) => [UserModel])
  async users(): Promise<UserModel[]> {
    return await this.userService.findAll();
  }
  @Mutation((returns) => UserModel)
  async createUser(@Args('name') name: string, @Args('password') password: string, @Args('email') email: string): Promise<UserModel> {
    return this.userService.create({ name, password, email });
  }
}
