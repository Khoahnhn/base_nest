import { EntityRepository, Repository } from 'typeorm';

import { Accounts } from '@/models/entities/accounts.entity';

@EntityRepository(Accounts)
export class AccountsRepository extends Repository<Accounts> {}
