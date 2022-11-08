import { PartialType, PickType } from '@nestjs/swagger';

import { Accounts } from '@/models/entities/accounts.entity';

export class RegisterDto extends PartialType(
  PickType(Accounts, ['walletAddress', 'role', 'email', 'name']),
) {}
