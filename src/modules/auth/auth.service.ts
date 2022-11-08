import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';

import { Accounts } from '@/models/entities/accounts.entity';
import { AccountsRepository } from '@/models/repositories/accounts.repository';
import { LoginDto } from '@/modules/auth/dtos/login.dto';
import { RegisterDto } from '@/modules/auth/dtos/register.dto';
import { IPayload } from '@/modules/auth/jwt.interface';
import { ERole } from '@/utils/enum';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AccountsRepository)
    private accountsRepository: AccountsRepository,
    private jwtService: JwtService,
  ) {}

  async handleLogin(loginDto: LoginDto): Promise<{
    accessToken: string;
    tokenType: string;
    walletAddress: string;
    userId: number;
    role: ERole;
  }> {
    const { walletAddress, signature } = loginDto;
    if (!walletAddress || !signature) {
      throw new HttpException(
        'Request should have signature and publicAddress',
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.accountsRepository.findOne({ walletAddress });
    if (!user) {
      throw new HttpException('User is undefined', HttpStatus.NOT_FOUND);
    }

    const payload: IPayload = {
      account_address: walletAddress,
      sub: user.id,
      role: user.role,
    };
    return {
      accessToken: this.jwtService.sign(payload),
      tokenType: 'bearer',
      walletAddress: walletAddress,
      userId: user.id,
      role: user.role,
    };
  }

  async handleRegister(registerDto: RegisterDto): Promise<Partial<Accounts>> {
    const { walletAddress, email, name, role } = registerDto;
    const accountFiltered = await this.accountsRepository.findOne({
      where: {
        // walletAddress: web3.utils.toChecksumAddress(walletAddress),
        walletAddress: walletAddress,
      },
    });
    if (accountFiltered) {
      throw new HttpException('Account existing.', HttpStatus.BAD_REQUEST);
    }
    return await this.accountsRepository.save({
      // walletAddress: web3.utils.toChecksumAddress(walletAddress),
      walletAddress: walletAddress,
      email,
      name,
      role,
      registerAt: moment().toISOString(),
    });
  }
}
