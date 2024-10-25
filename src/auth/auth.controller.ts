// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto'; // Asegúrate de que esta ruta sea correcta

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() authDto: CreateUserDto) {
    return this.authService.register(authDto);
  }

  @Post('login')
  async login(@Body() authDto: CreateUserDto) {
    return this.authService.login(authDto);
  }
}



