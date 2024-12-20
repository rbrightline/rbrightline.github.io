import { join } from 'path';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  username: 'testuser',
  password: 'password',
  database: 'testdb',
  entities: [
    join(
      __dirname,
      '..',
      '..',
      '..',
      'libs',
      'entity',
      'src',
      'lib',
      '**/*.entity.ts'
    ),
  ],
  migrations: [join(__dirname, 'migration', '**/*.ts')],
});
