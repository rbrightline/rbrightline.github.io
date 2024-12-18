import { DataSourceOptions } from 'typeorm';

export const DATASOURCE_OPTIONS: Readonly<DataSourceOptions> = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
  entities: ['./**/*.entity.ts'],
  migrations: [
    /*...*/
  ],
  migrationsTableName: 'custom_migration_table',
};
