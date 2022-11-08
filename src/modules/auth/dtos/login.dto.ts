import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

import { Accounts } from '@/models/entities/accounts.entity';

export class LoginDto extends PartialType(
  PickType(Accounts, ['walletAddress']),
) {
  @IsString()
  @ApiProperty({
    required: true,
    type: 'string',
    example:
      '0x95170610db759cc5bcee14bf2485d22e6c17c8f4fc643b5a564b4df132d2068669f33c28104c5b232f76f06cf02bc71b12526004e32f3f46a96b2a04bfb380ed1b',
  })
  signature: string;
}
