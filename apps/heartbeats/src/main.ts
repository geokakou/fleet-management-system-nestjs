import { NestFactory } from '@nestjs/core';
import { HeartbeatsModule } from './heartbeats.module';

async function bootstrap() {
  const app = await NestFactory.create(HeartbeatsModule);
  await app.listen(3000);
}
bootstrap();
