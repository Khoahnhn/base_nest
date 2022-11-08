import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from '@/app.module';
import {
  APP_PREFIX_CONFIG,
  IS_OPEN_SWAGGER,
  PORT_CONFIG,
} from '@/constants/env';
import { swaggerConfig } from '@/configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix(APP_PREFIX_CONFIG, {
    exclude: [],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      skipMissingProperties: true,
    }),
  );

  if (IS_OPEN_SWAGGER) swaggerConfig(app);
  await app.listen(PORT_CONFIG);
}
bootstrap();
