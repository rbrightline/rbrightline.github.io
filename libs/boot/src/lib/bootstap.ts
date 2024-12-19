import { Logger, Type } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { InputValiationPipe } from './input-validation.pipe';

export async function bootstrap(appModule: Type) {
  const app = await NestFactory.create(appModule, {});

  // Configurations
  const C = app.get(ConfigService);
  const APP_NAME = C.getOrThrow('APP_NAME');
  const VERSION = C.getOrThrow('VERSION');
  const APP_DESCRIPTION = C.getOrThrow('APP_DESCRIPTION');
  const PREFIX = C.getOrThrow('PREFIX');
  const PORT = C.getOrThrow('PORT');
  const DOMAIN = C.getOrThrow('DOMAIN');

  app.setGlobalPrefix(PREFIX);

  // Security
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  app.use(helmet());

  // Global pipes
  app.useGlobalPipes(InputValiationPipe);

  app.useGlobalInterceptors();

  const swaggerConfig = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(APP_DESCRIPTION)
    .addBearerAuth()
    .setVersion(VERSION)

    .build();

  const config = SwaggerModule.createDocument(app, swaggerConfig, {});
  SwaggerModule.setup(PREFIX, app, config);

  await app.listen(PORT, () => {
    const log = `🚀 [ ${APP_NAME} ] is running on: http://${DOMAIN}:${PORT}/${PREFIX}`;
    Logger.log(log, 'Bootstap');
  });
}
