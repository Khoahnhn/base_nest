import { Module } from '@nestjs/common';

import { DogController } from '@/modules/dog/dog.controller';

@Module({
  imports: [],
  controllers: [DogController],
  providers: [],
})
export class DogModule {}
