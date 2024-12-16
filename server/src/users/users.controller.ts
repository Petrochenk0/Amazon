import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register') // Регистрация
  async register(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('confirmPassword') confirmPassword: string,
  ) {
    return this.usersService.register(
      username,
      email,
      password,
      confirmPassword,
    );
  }

  @Post('login') // Логин
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.usersService.login(username, password);
  }
}
