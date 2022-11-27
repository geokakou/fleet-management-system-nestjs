import { Body, Controller, Get, Post } from '@nestjs/common';
import { TripsService, CreateTripDTO, Trip } from '@app/common/trips';

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
}
