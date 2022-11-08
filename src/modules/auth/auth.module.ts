import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import {
  JWT_EXPIRED_TOKEN_CONFIG,
  JWT_SECRET_KEY_CONFIG,
} from '@/constants/env';
import { DatabaseCommonRepository } from '@/models/repositories';
import { AccountsModule } from '@/modules/accounts/accounts.module';
import { AuthController } from '@/modules/auth/auth.controller';
import { AuthService } from '@/modules/auth/auth.service';
import { JwtAuthGuard } from '@/modules/auth/jwt.guard';
import { JwtStrategy } from '@/modules/auth/jwt.strategy';

@Module({
  imports: [
    DatabaseCommonRepository,
    JwtModule.register({
      secret: JWT_SECRET_KEY_CONFIG,
      signOptions: {
        expiresIn: JWT_EXPIRED_TOKEN_CONFIG,
      },
    }),
    AccountsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
  exports: [AuthService],
})
export class AuthModule {}
