import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt'; // Для хэширования
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  // Регистрация
  async register(
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
  ): Promise<User> {
    if (!username || !email || !password || password !== confirmPassword) {
      throw new Error('Invalid input or passwords do not match!');
    }

    const existingUser = await this.userRepository.findOne({
      where: { username },
    });
    if (existingUser) {
      throw new Error('Username already exists!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({
      username,
      email,
      password: hashedPassword,
    });
    return this.userRepository.save(user);
  }

  // Логин
  async login(
    username: string,
    password: string,
  ): Promise<{ accessToken: string; username: string }> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials!');
    }

    const payload = { username: user.username, sub: user.id };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken, username: user.username };
  }

  async generateToken(username: string) {
    const payload = { username }; // Что ты зашиваешь в токен
    return this.jwtService.sign(payload);
  }
}
