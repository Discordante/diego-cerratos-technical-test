import helmet from 'helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { setupSwagger } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const docsPath = configService.get<string>('SWAGGER_PATH','docs');

  app.enableCors();
  app.use(helmet());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      stopAtFirstError: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.enableShutdownHooks();

  setupSwagger(app, { docsPath });

  const port = configService.get('APP_PORT', '8888');

  await app.listen(port);

  new Logger('Init').log(`- 🚀 Application: ${await app.getUrl()}`);
  new Logger('Init').log(
    `- 📝 Documentation: ${await app.getUrl()}${docsPath}`,
  );
}
bootstrap();
