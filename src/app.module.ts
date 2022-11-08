import { CacheModule, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import type { ClientOpts } from 'redis';

import { REDIS_HOST_CONFIG, REDIS_PORT_CONFIG } from '@/constants/env';
import { RolesGuard } from '@/core/role/role.guard';
import { Modules } from '@/modules';
import { JwtAuthGuard } from '@/modules/auth/jwt.guard';
import { config } from '@/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    CacheModule.register<ClientOpts>({
      isGlobal: true,
      store: redisStore,
      host: REDIS_HOST_CONFIG,
      port: parseInt(REDIS_PORT_CONFIG),
    }),
    Modules,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
