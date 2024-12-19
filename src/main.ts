import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Active CORS pour accepter les requêtes depuis d'autres origines
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
