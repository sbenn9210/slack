import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('user', (table) => {
            table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
            table.string('name', 255).notNullable();
            table.string('username', 255).notNullable();
            table.string('email', 255).notNullable();
            table.string('password', 255).notNullable();
            table.timestamps(true, true);
        })
        .createTable('member', (table) => {
            table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
            table.uuid('team_id').notNullable();
            table.uuid('user_id').notNullable();
            table.timestamps(true, true);
        })
        .createTable('team', (table) => {
            table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
            table.string('name', 255).notNullable();
            table.uuid('owner_id').notNullable();
            table.timestamps(true, true);
        })
        .createTable('message', (table) => {
            table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
            table.text('content');
            table.uuid('user_id').notNullable();
            table.uuid('channel_id').notNullable();
            table.timestamps(true, true);
        })
        .createTable('channel', (table) => {
            table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
            table.string('name').notNullable();
            table.uuid('team_id').notNullable();
            table.boolean('public');
            table.timestamps(true, true);
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTableIfExists('user')
        .dropTableIfExists('member')
        .dropTableIfExists('team')
        .dropTableIfExists('message')
        .dropTableIfExists('channel');
}

