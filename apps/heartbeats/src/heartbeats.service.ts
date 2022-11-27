import { TripsRepository } from '@app/common/trips/trips.repository';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class HeartbeatsService {
  constructor(private readonly tripsRepository: TripsRepository) {}
  getHello(): string {
    return 'Hello World!';
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  // */10 * * * * *
  async generate() {
    const activeTrips = await this.tripsRepository.find({ isActive: true });
    console.log(`There is ${activeTrips.length} active trip(s)`);
  }
}
