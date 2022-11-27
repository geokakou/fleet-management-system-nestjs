import { Test, TestingModule } from '@nestjs/testing';
import { PenaltyPointsController } from './penalty_points.controller';
import { PenaltyPointsService } from './penalty_points.service';

describe('PenaltyPointsController', () => {
  let penaltyPointsController: PenaltyPointsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PenaltyPointsController],
      providers: [PenaltyPointsService],
    }).compile();

    penaltyPointsController = app.get<PenaltyPointsController>(
      PenaltyPointsController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(penaltyPointsController.getHello()).toBe('Hello World!');
    });
  });
});
