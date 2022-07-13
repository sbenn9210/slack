import * as dotenv from "dotenv";
import type { Knex } from "knex";
import { knexSnakeCaseMappers } from "objection";

dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
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
