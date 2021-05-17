import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserService } from '../service/user.service';
import { CreateUserInputDTO } from '../dto/user.create.input.dto';

@Resolver(() => User)
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

  @Query(() => User)
  async userByUsername(@Args('username') username: string): Promise<User> {
    return await this.userService.findByUserName(username);
  }

  @Query(() => User)
  async userByPhone(@Args('phone') phone: string): Promise<User> {
    return await this.userService.findByPhoneNumber(phone);
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: number) {
    return await this.userService.delete(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('user') createUserInputDTO: CreateUserInputDTO,
  ): Promise<User> {
    const date = new Date();
    return await this.userService.create({
      ...createUserInputDTO,
      registration_date: date,
    });
  }
  @Mutation(() => Boolean)
  async updatePassword(
    @Args('previouspass') previouspassword: string,
    @Args('newpass') newpassword: string,
    @Args('id') id: number,
  ): Promise<boolean> {
    return await this.userService.updatePassword(
      previouspassword,
      newpassword,
      id,
    );
  }
}
