import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from '../user/service/user.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  //validate a user
  async validateUser(username: string, password: string): Promise<any> {
    console.log(username, password)
    const user = await this.usersService.findByUserName(username);
    const passwordValid = await bcrypt.compare(password, user.password)

    if (!user) {
        throw new NotAcceptableException('could not find the user');
      }

    if (user && passwordValid) {
      return {
        userId: user.id,
        userName: user.username
      };
    }

    return null;
  }
}

