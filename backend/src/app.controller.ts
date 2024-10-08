import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/jwt.auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  // Для теста
  // @Get('/token')
  // getToken(): string {
  //   console.log('app.cont 222');
  //   return this.authService.createToken({ email: 'Maria', role: 'admin' });
  // }
}
