import { DynamicModule } from '@nestjs/common';
export class DatabaseModule {
  static feature(): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [],
      providers: [],
      exports: [],
    };
  }

  static root(): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [],
      providers: [],
      exports: [],
    };
  }
}
