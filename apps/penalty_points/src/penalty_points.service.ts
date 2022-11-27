import { TripStatus } from '@app/common/trips';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PenaltyPointsService {
  getHello(): string {
    return 'Hello World!';
  }

  checkSpeed(data: TripStatus) {
    const {speed} = data; 
    const limits = [100, 80, 60];
    const limitPoints = [5, 2, 1];
    let points = 0;
    let uncalculateSpeed = speed;
    for(let i=0; i<limits.length; i++){
      points += this.calculatePoints(uncalculateSpeed, limits[i], limitPoints[i]);
      uncalculateSpeed = uncalculateSpeed < limits[i] ? uncalculateSpeed : limits[i] ;
    }
  }

  private calculatePoints(speed: number, limit: number, limitPoints: number): number {
    const aboveLimit = speed - limit;
    return aboveLimit > 0 ? aboveLimit * limitPoints : 0  
  }
}
