import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('tasks')
export class TaskProcessor extends WorkerHost {
  async process(job: Job<any>): Promise<any> {
    console.log('Processing job:', job.data); // Debugging log

    let result = job.data;
    console.log('Processed Result:', result); // Debugging log
    return result;
  }
}
