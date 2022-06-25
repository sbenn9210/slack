import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('user', (table) => {
            table.uuid('id').defaultTo(knex.raw('gen_random_uuid()'));
            table.string('name', 255).notNullable();
            table.string('username', 255).notNullable();
            table.string('email', 255).notNullable();
            table.string('password', 255).notNullable();
            table.timestamps(true, true);
        })
        .createTable('member', (table) => {
            table.uuid('id').defaultTo(knex.raw('gen_random_uuid()'));
            table.uuid('teamId');
            table.uuid('userId');
            table.timestamps(true, true);

        })
}


export async function down(knex: Knex): Promise<void> {
}

