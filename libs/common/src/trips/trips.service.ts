import { Injectable } from '@nestjs/common';
import { DriversService } from '../drivers';

import { CreateTripDTO } from './dto/trips.dto';
import { Trip } from './schemas/trips.schema';
import { TripsRepository } from './trips.repository';

@Injectable()
export class TripsService {
  constructor(
    private readonly tripsRepository: TripsRepository,
    private readonly driversService: DriversService,
  ) {}

  async getTrips(): Promise<Trip[]> {
    return this.tripsRepository.find({});
  }

  async createTrip(trip: CreateTripDTO): Promise<Trip> {
    const { driverId, carRegNumber } = trip;

    //check if driver and car are exist
    const [driver, car] = await Promise.all([
      this.driversService.findDriver(driverId),
      this.driversService.findDriver(driverId),
    ]);
    return this.tripsRepository.create(trip);
  }

  async findActive(): Promise<Trip[]> {
    return this.tripsRepository.find({ isActive: true });
  }
}
