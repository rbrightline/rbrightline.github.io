import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  const service: AppService = {
    getData() {
      return { message: 'test' };
    },
  };
  const controller = new AppController(service);

  it('should return "test"', () => {
    expect(controller.getData()).toEqual({ message: 'test' });
  });
});
