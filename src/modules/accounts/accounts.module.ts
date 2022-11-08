import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import {
  JWT_EXPIRED_TOKEN_CONFIG,
  JWT_SECRET_KEY_CONFIG,
} from '@/constants/env';
import { DatabaseCommonRepository } from '@/models/repositories';
import { AccountsController } from '@/modules/accounts/accounts.controller';
import { AccountsService } from '@/modules/accounts/accounts.service';

@Module({
  imports: [
    DatabaseCommonRepository,
    JwtModule.register({
      secret: JWT_SECRET_KEY_CONFIG,
      signOptions: {
        expiresIn: JWT_EXPIRED_TOKEN_CONFIG,
      },
    }),
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
  exports: [AccountsService],
})
export class AccountsModule {}
