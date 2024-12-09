/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, Type } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

export type BootOptions = {
  appModule: Type<any>;
  origins: string[];
  description?: string;
  fullname?: string;
  email?: string;
  version?: string;
  website?: string;
  domain?: string;
};

export async function bootRestApi(options: BootOptions) {
  const {
    appModule,
    origins,
    description,
    email,
    website,
    fullname,
    version,
    domain,
  } = options;

  const app = await NestFactory.create(appModule);

  const config = app.get(ConfigService);

  const PREFIX = config.get('PREFIX', 'api');
  const PORT = config.get('PORT', 3000);
  const NAME = config.get('NAME', 'Name not set');

  app.use(helmet());
  app.enableCors({ origin: origins });
  app.setGlobalPrefix(PREFIX);

  // Serve the custom CSS file
  const docConfig = new DocumentBuilder()
    .setTitle(NAME)
    .setDescription(description || 'Api description')
    .setVersion(version || '0.0.1-none')
    .addBearerAuth()
    .setContact(
      fullname || 'Fullname',
      website || 'https://rbrightline.github.io',
      email || 'info@rbrightline.io'
    )
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, docConfig);

  SwaggerModule.setup(PREFIX, app, documentFactory, {
    customCssUrl: '/swagger-custom.css',
    explorer: true,
  });

  await app.listen(PORT);

  Logger.log(
    `🚀 [${NAME}] : https://${domain || 'localhost'}:${PORT}/${PREFIX}`
  );
}
