import { Test, TestingModule } from '@nestjs/testing';
import { HeartbeatsController } from './heartbeats.controller';
import { HeartbeatsService } from './heartbeats.service';

describe('HeartbeatsController', () => {
  let heartbeatsController: HeartbeatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HeartbeatsController],
      providers: [HeartbeatsService],
    }).compile();

    heartbeatsController = app.get<HeartbeatsController>(HeartbeatsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(heartbeatsController.getHello()).toBe('Hello World!');
    });
  });
});
