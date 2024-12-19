import { InjectQueue } from '@nestjs/bullmq';
import { Controller, Get } from '@nestjs/common';
import { Queue } from 'bullmq';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @InjectQueue('tasks') private readonly taskQueue: Queue,
    private readonly appService: AppService
  ) {}

  @Get('data')
  getData() {
    return this.appService.getData();
  }

  @Get('hello')
  async hello() {
    const result = await this.taskQueue.add('newjob', { value: 'que data' });

    return result.data;
  }
}
