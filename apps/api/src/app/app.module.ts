import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FallbackModule } from '@rline/boot';
import { DatasourceFactory } from '@rline/db';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronService } from './cron.service';
import { TaskProcessor } from './task.processor';

// [ ]  add bull module to support workers.
// [ ]  create internal operation logger. Create operation entitty that track crud oprations and changing data.
@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'tasks',
    }),

    ConfigModule.forRoot(),
    ScheduleModule.forRoot({}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DatasourceFactory,
    }),
    FallbackModule,
  ],
  providers: [AppService, CronService, TaskProcessor],
  controllers: [AppController],
})
export class AppModule {}
