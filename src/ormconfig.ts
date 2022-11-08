import { envConfig } from '@/configs/database.config';

export const config: any = {
  ...envConfig,
  logging: true,
  logger: 'file',
  migrationsTableName: 'migrate_tables',
  synchronize: true,
  migrationsRun: false,
  migrations: ['dist/migrations/*{.ts, .js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
