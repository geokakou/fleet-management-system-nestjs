import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import {
  TripsService,
  CreateTripDTO,
  Trip,
  DeactivateTripDTO,
} from '@app/common/trips';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get()
  async getTrips(): Promise<Trip[]> {
    return this.tripsService.getTrips();
  }

  @Post()
  async createTrip(@Body() trip: CreateTripDTO): Promise<Trip> {
    return this.tripsService.createTrip(trip);
  }

  @Get('active')
  async getActive(): Promise<Trip[]> {
    return this.tripsService.findActive();
  }

  @Put('deactivate')
  async deactivateTrip(@Body() trip: DeactivateTripDTO): Promise<Trip> {
    return this.tripsService.deactivate(trip);
  }
}
