import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  username: 'testuser',
  password: 'password',
  database: 'testdb',
  entities: ['src/**/*.entity.ts'],
  migrations: ['migrations/**'],
});
