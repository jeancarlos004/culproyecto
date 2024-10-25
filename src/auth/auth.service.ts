// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from '../users/dto/create-user.dto'; 
import { JwtService } from '@nestjs/jwt'; // Importa JwtService

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService, // Inyecta JwtService
  ) {}

  async register(authDto: CreateUserDto): Promise<User> {
    const { username, password } = authDto;

    const existingUser = await this.usersService.findUser(username);
    if (existingUser) {
      throw new Error('User already exists');
    }

    return this.usersService.create(authDto);
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(authDto: CreateUserDto): Promise<{ access_token: string }> {
    const { username, password } = authDto;
    const user = await this.validateUser(username, password);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Genera el token JWT
    const payload = { username: user.username, sub: user.id };
    const access_token = this.jwtService.sign(payload);

    return { access_token }; // Devuelve el token generado
  }
}
