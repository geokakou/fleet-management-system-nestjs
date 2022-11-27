import { TripsRepository } from '@app/common/trips/trips.repository';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Cron, CronExpression } from '@nestjs/schedule';
import { now } from 'mongoose';
import { MAX_SPEED, TRIP_STATUS } from './constants';

@Injectable()
export class HeartbeatsService {
  constructor(
    private readonly tripsRepository: TripsRepository,
    @Inject(TRIP_STATUS) private penaltyPointsClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  // */10 * * * * *
  async generate() {
    const activeTrips = await this.tripsRepository.find({ isActive: true });
    console.log(`There is ${activeTrips.length} active trip(s)`);

    activeTrips.forEach(({ driverId, carRegNumber }) => {
      this.penaltyPointsClient.emit('trip_status', {
        driverId,
        carRegNumber,
        speed: this.getSpeed(),
        datetime: now(),
      });
    });
  }
  private getSpeed() {
    return Math.floor(Math.random() * MAX_SPEED);
  }
}
