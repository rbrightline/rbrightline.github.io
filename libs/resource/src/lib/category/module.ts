import { Module } from '@nestjs/common';
import { Category } from '@rline/entity';
import { DatabaseModule } from '@rline/orm';

@Module({
  imports: [DatabaseModule.feature([Category])],
})
export class CategoryModule {}
