import { ERole } from '@/utils/enum';

export interface IPayload {
  account_address: string;
  sub: number;
  role: ERole;
}
