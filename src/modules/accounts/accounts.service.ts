import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Accounts } from '@/models/entities/accounts.entity';
import { AccountsRepository } from '@/models/repositories/accounts.repository';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(AccountsRepository)
    private accountsRepository: AccountsRepository,
  ) {}

  async handleGetMe(walletAddress: string): Promise<Partial<Accounts>> {
    const account = await this.accountsRepository.findOne({ walletAddress });
    if (!account) {
      throw new HttpException('User is undefined', HttpStatus.NOT_FOUND);
    }
    return account;
  }
}
