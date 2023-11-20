import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
    UseGuards,
    Request
} from '@nestjs/common';
import { UserService } from './service/user.service';
import { CreateUserDTO } from './dto/user.create.dto';
import { User } from './entities/user.entity';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
  
    @Post('/create')
    createUser(@Body() createUserDto: CreateUserDTO): Promise<User> {
        console.log(createUserDto)
        return this.userService.create(createUserDto);
    }
  
    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() req): any {
        return {User: req.user,
        msg: 'User logged in'};
    };
  
    @Get('/:userId')
    getUser(@Param('userId') userId: number) {
        return this.userService.findById(userId);
    }
  
    // @Patch('/edit/:userId')
    // editUser(
    // @Body() createUserDto: CreateUserDTO,
    // @Param('userId') userId: number,
    // ): Promise<User> {
    //     return this.userService.editUser(userId, createUserDto);
    // }
  
    @Delete('/delete/:userId')
    deleteUser(@Param('userId') userId: number) {
        return this.userService.delete(userId);
    }
}