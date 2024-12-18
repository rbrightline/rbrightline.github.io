import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample } from './sample.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sample])],
})
export class SampleModule {}
