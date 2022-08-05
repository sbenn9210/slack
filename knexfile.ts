import type { Knex } from "knex";
import { knexSnakeCaseMappers } from "objection";
import { loadEnvConfig } from '@next/env';

const dev = process.env.NODE_ENV !== 'production'
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = loadEnvConfig('./', dev).combinedEnv

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: Number(DB_PORT),
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    },
    ...knexSnakeCaseMappers(),
  },
};

module.exports = config;
