import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModel } from '../models/user.model';
import { UserService } from './user.service';
import { UserResolver } from '../resolvers/user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
