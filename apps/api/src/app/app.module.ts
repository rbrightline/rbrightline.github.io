import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FallbackModule } from '@rline/boot';
import { DatasourceFactory } from '@rline/db';
import { CronService } from './cron.service';

// [ ]  add bull module to support workers.
// [ ]  create internal operation logger. Create operation entitty that track crud oprations and changing data.
@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot({}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DatasourceFactory,
    }),
    FallbackModule,
  ],
  providers: [CronService],
})
export class AppModule {}
