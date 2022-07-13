// npx knex migrate:make init --migrations-directory db/migrations
const knex = require("knex");
const knexfile = require("../../knexfile");
const { Model } = require("objection");

export default function setupDb() {
  const db = knex(knexfile.development);
  Model.knex(db);
}
