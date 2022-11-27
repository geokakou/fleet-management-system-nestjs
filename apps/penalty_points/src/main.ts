import { RmqService } from '@app/common/rmq/rmq.service';
import { NestFactory } from '@nestjs/core';
import { PenaltyPointsModule } from './penalty_points.module';

async function bootstrap() {
  const app = await NestFactory.create(PenaltyPointsModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('TRIPSTATUS'));
  await app.startAllMicroservices();
}
bootstrap();
