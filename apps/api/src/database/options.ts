import { join } from 'path';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

const ROOT = join(__dirname, '..', '..', '..', '..');

export const AppDataSource = new DataSource({
  type: 'postgres',
  username: 'testuser',
  password: 'password',
  database: 'testdb',
  entities: [join(ROOT, 'libs/entity/src/**/*.entity.ts')],
  migrations: [join(__dirname, 'migrations')],
});
