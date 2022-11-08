import {
  CACHE_MANAGER,
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { Cache } from 'cache-manager';

import { getCats, getDogs } from '@/utils/util';

@Controller('dog')
export class DogController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(10000)
  @CacheKey('all-dogsdogs')
  @Get('dogs')
  async getDogs() {
    console.log(await this.cacheManager.get('all-dogsdogs'));
    return await getDogs();
  }

  // @UseInterceptors(CacheInterceptor)
  // @CacheTTL(10000)
  @Get('cats')
  async getCats() {
    const cachedCats = await this.cacheManager.get('all-cats');
    console.log(cachedCats);
    if (cachedCats) return cachedCats;

    const cats = await getCats();
    await this.cacheManager.set('all-cats', cats, 1000);

    return cats;
  }
}
