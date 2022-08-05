const Knex = require("knex");
require("dotenv").config();

const connection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

async function main() {
  let knex = Knex({
    client: "pg",
    connection,
  });

  await knex.raw("CREATE DATABASE ??", process.env.DB_NAME);
}

main().catch(console.log).then(process.exit);
