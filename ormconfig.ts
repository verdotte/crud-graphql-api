import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const { DB_USER, DB_HOST, DB_PASSWORD, DB_PORT, DEV_DB } = process.env;

const config: ConnectionOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DEV_DB,
  synchronize: true,
  logging: false,
  entities: ['src/database/entity/**/*.ts'],
  migrations: ['src/database/migrations/**/*.ts'],
  subscribers: ['src/database/subscriber/**/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/database/entity',
    subscribersDir: 'src/database/subscriber',
  },
};

export = config;
