import { Controller, Get } from '@nestjs/common';
import { Penalty, PenaltyService } from '@app/common/penalty';

@Controller('penalty-points')
export class PenaltyController {
  constructor(private readonly penaltyService: PenaltyService) {}

  @Get()
  async getPenalties(): Promise<Penalty[]> {
    return this.penaltyService.getPenalties();
  }
}
