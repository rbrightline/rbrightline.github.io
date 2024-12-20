import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FallbackModule } from '@rline/boot';
import { DatasourceFactory } from '@rline/db';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronService } from './cron.service';

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
  providers: [AppService, CronService],
  controllers: [AppController],
})
export class AppModule {}
