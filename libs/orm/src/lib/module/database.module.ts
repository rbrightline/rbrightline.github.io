import { DynamicModule, Module, Type } from '@nestjs/common';
import { ID } from '@rline/type';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  getResourceServiceToken,
  provideResourceService,
} from './provide-resourse-service';

@Module({})
export class DatabaseModule {
  static feature<T extends ID>(entities: Type<T>[]): DynamicModule {
    const providers = entities.map((e) => {
      return provideResourceService(e);
    });
    const exports = entities.map((e) => getResourceServiceToken(e));
    return {
      module: DatabaseModule,
      imports: [TypeOrmModule.forFeature(entities)],
      providers: [...providers],
      exports: [...exports],
    };
  }
}
