import { Module } from '@nestjs/common';
import { FallbackController } from './fallback.controller';

// [ ] create greeting page
@Module({
  controllers: [FallbackController],
})
export class FallbackModule {}
