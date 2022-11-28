import { PenaltyService } from '@app/common/penalty/penalty.service';
import { TripStatus } from '@app/common/trips';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PenaltyPointsService {
  constructor(private readonly penaltyService: PenaltyService) {}

  async checkSpeed(data: TripStatus) {
    const { speed, driverId } = data;
    const limits = [100, 80, 60];
    const limitPoints = [5, 2, 1];
    let points = 0;
    let uncalculateSpeed = speed;
    for (let i = 0; i < limits.length; i++) {
      points += this.calculatePoints(
        uncalculateSpeed,
        limits[i],
        limitPoints[i],
      );
      uncalculateSpeed =
        uncalculateSpeed < limits[i] ? uncalculateSpeed : limits[i];
    }
    await this.penaltyService.addPoints(driverId, points);
  }

  private calculatePoints(
    speed: number,
    limit: number,
    limitPoints: number,
  ): number {
    const aboveLimit = speed - limit;
    return aboveLimit > 0 ? aboveLimit * limitPoints : 0;
  }
}
