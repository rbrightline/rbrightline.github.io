import { Logger, Type } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigKey } from '@rline/type';
import helmet from 'helmet';
import { InputValiationPipe } from './input-validation.pipe';

export async function bootstrap(appModule: Type) {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(appModule, {});

  // Configurations
  const C = app.get(ConfigService);

  const APP_NAME = C.get(ConfigKey.APP_NAME, 'Default app name');
  const VERSION = C.get(ConfigKey.VERSION, '0.0.1');
  const APP_DESCRIPTION = C.get(
    ConfigKey.APP_DESCRIPTION,
    'Default app description'
  );
  const PREFIX = C.get(ConfigKey.PREFIX, 'api');
  const PORT = C.get(ConfigKey.PORT, '3000');
  const DOMAIN = C.get(ConfigKey.DOMAIN, 'localhost');

  console.table({
    APP_NAME,
    VERSION,
    APP_DESCRIPTION,
    PREFIX,
    PORT,
    DOMAIN,
  });

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
