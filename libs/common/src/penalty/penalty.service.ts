import { Injectable } from '@nestjs/common';
import { PenaltyRepository } from './penalty.repository';
import { Penalty } from './schemas/penalty.schema';

@Injectable()
export class PenaltyService {
  constructor(private readonly penaltyRepository: PenaltyRepository) {}

  async getPenalties(): Promise<Penalty[]> {
    return this.penaltyRepository.find({});
  }

  async findPenaltyforDriver(driverId: string): Promise<Penalty> {
    return this.penaltyRepository.findOne({ driverId });
  }

  async addPoints(driverId: string, points: number) {
    const existingPoints =
      (await this.findPenaltyforDriver(driverId))?.points || 0;
    const newPoints = points + existingPoints;
    await this.penaltyRepository.upsert({ driverId }, { points: newPoints });
  }
}
