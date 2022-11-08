import { Module } from '@nestjs/common';

import { AccountsModule } from '@/modules/accounts/accounts.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { DogModule } from '@/modules/dog/dog.module';

@Module({
  imports: [DogModule, AuthModule, AccountsModule],
  controllers: [],
  providers: [],
})
export class Modules {}
