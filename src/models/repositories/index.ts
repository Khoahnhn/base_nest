import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountsRepository } from '@/models/repositories/accounts.repository';

const commonRepositories = [AccountsRepository];

@Module({
  imports: [TypeOrmModule.forFeature(commonRepositories, 'default')],
  exports: [TypeOrmModule],
})
export class DatabaseCommonRepository {}
