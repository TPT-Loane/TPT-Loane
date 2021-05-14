import { Resolver, Mutation, Args, Query, Root } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserService } from '../service/user.service';
import { UserDTO } from '../dto/user.dto';
import { CreateUserDTO } from '../dto/user.create.dto';
import { Role } from '../roles/user.roles';
import { CreateUserInputDTO } from '../dto/user.create.input.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Query(() => UserDTO)
  async userById(@Args('id') id: number): Promise<UserDTO> {
    return await this.userService.findById(id);
  }

  @Query(() => UserDTO)
  async userByPersonalCode(
    @Args('id') personal_code: string,
  ): Promise<UserDTO> {
    return await this.userService.findByPersonalCode(personal_code);
  }

  @Query(() => UserDTO)
  async userByUsername(@Args('username') username: string): Promise<UserDTO> {
    return await this.userService.findByUserName(username);
  }

  @Query(() => UserDTO)
  async userByPhone(@Args('phone') phone: string): Promise<UserDTO> {
    return await this.userService.findByPhoneNumber(phone);
  }

  @Query(() => [UserDTO])
  async users(): Promise<UserDTO[]> {
    return await this.userService.findAll();
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: number) {
    return await this.userService.delete(id);
  }

  @Mutation(() => UserDTO)
  async createUser(
    @Args('user') createUserInputDTO: CreateUserInputDTO,
  ): Promise<UserDTO> {
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
