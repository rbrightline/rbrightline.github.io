import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronService {
  constructor() {}

  @Cron(CronExpression.EVERY_5_SECONDS)
  fiveSecond() {
    Logger.debug(`Every 5 second...`, 'AppModule');
  }
}
