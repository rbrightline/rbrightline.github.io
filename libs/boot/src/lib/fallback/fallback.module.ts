import { Module } from '@nestjs/common';
import { FallbackController } from './fallback.controller';
/**
 * Fallback module provides not found pages.
 */
@Module({
  controllers: [FallbackController],
})
export class FallbackModule {}
