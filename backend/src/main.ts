import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(
    session({
      secret: 'this-is-super-secret-password',
      resave: false,
      saveUninitialized: false,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
