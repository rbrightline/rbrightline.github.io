import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatasourceFactory implements TypeOrmOptionsFactory {
  constructor(protected readonly config: ConfigService) {}
  createTypeOrmOptions(cn?: string): TypeOrmModuleOptions {
    const database = this.config.getOrThrow('DB_NAME');
    const username = this.config.getOrThrow('DB_USERNAME');
    const password = this.config.getOrThrow('DB_PASSWORD');
    return {
      type: 'postgres',
      database,
      username,
      password,
      autoLoadEntities: true,
    };
  }
}
