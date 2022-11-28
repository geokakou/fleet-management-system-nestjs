import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars';
import { DriversService } from '../drivers';
import { DeactivateTripDTO } from './dto/trips-deactivate.dto';
import { CreateTripDTO } from './dto/trips.dto';
import { Trip } from './schemas/trips.schema';
import { TripsRepository } from './trips.repository';

@Injectable()
export class TripsService {
  constructor(
    private readonly tripsRepository: TripsRepository,
    private readonly driversService: DriversService,
    private readonly carsService: CarsService,
  ) {}

  async getTrips(): Promise<Trip[]> {
    return this.tripsRepository.find({});
  }

  async createTrip(trip: CreateTripDTO): Promise<Trip> {
    const { driverId, carRegNumber } = trip;

    //check if driver and car are exist
    await Promise.all([
      this.driversService.findDriver(driverId),
      this.carsService.findCar(carRegNumber),
    ]);
    return this.tripsRepository.create(trip);
  }

  async findActive(): Promise<Trip[]> {
    return this.tripsRepository.find({ isActive: true });
  }

  async deactivate(data: DeactivateTripDTO): Promise<Trip> {
    return this.tripsRepository.findOneAndUpdate(
      { ...data, isActive: true },
      { isActive: false },
    );
  }
}
