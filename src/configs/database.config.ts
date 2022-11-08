import { DATABASE_CONFIG } from '@/constants/env';

require('dotenv').config({ path: `env` });

export interface IDatabaseConfig {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: string[];
  logging: boolean;
  autoLoadEntities: boolean;
}

export const envConfig: IDatabaseConfig = {
  type: DATABASE_CONFIG.DB_TYPE,
  host: DATABASE_CONFIG.DB_HOST,
  port: DATABASE_CONFIG.DB_PORT,
  username: DATABASE_CONFIG.DB_USERNAME,
  password: DATABASE_CONFIG.DB_PASSWORD,
  database: DATABASE_CONFIG.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  logging: DATABASE_CONFIG.DB_LOGGING,
  autoLoadEntities: true,
};
