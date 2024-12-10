import { Module } from '@nestjs/common';
import { Category, CategoryView } from '@rline/entity';
import { DatabaseModule } from '@rline/orm';
import { CategoryController } from './controller';

@Module({
  imports: [DatabaseModule.feature([Category, CategoryView])],
  controllers: [CategoryController],
})
export class CategoryModule {}
