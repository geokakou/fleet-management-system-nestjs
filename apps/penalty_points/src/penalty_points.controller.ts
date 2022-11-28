import { RmqService } from '@app/common/rmq/rmq.service';
import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { PenaltyPointsService } from './penalty_points.service';

@Controller()
export class PenaltyPointsController {
  constructor(
    private readonly penaltyPointsService: PenaltyPointsService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern('trip_status')
  async handleTripStatus(@Payload() data: any, @Ctx() context: RmqContext) {
    this.penaltyPointsService.checkSpeed(data);
    this.rmqService.ack(context);
  }
}
