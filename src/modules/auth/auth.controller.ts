import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from '@/modules/auth/auth.service';
import { LoginDto } from '@/modules/auth/dtos/login.dto';
import { RegisterDto } from '@/modules/auth/dtos/register.dto';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiBody({
    type: LoginDto,
  })
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.handleLogin(loginDto);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register' })
  @ApiBody({
    type: RegisterDto,
  })
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.handleRegister(registerDto);
  }
}
