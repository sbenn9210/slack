import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
   // truncate all existing tables
   await knex.raw('TRUNCATE TABLE "user" CASCADE');
   await knex.raw('TRUNCATE TABLE "member" CASCADE');
   await knex.raw('TRUNCATE TABLE "team" CASCADE');
   await knex.raw('TRUNCATE TABLE "message" CASCADE');
   await knex.raw('TRUNCATE TABLE "channel" CASCADE');

    // Inserts seed entries
    await knex("user").insert([
        {
            id: '0c996d8c-a4c5-425e-b807-57cd1a7efdb1',
            name: 'Shawn',
            username: 'shawnbenny',
            email: 'test@test.com',
            password: 'testing'
        }
    ]);

    await knex('channel').insert([
        {
            id: '3812596d-77f2-4d39-94a8-04711b1b1fb3',
            name: 'trash',
            teamId: 'ee1d8f9f-0e8a-445c-8376-47f6c4834ad7',
            public: true
        }
    ])

    await knex('team').insert([
        {
           id: 'ee1d8f9f-0e8a-445c-8376-47f6c4834ad7',
           name: 'trashTeam',
           ownerId: '0c996d8c-a4c5-425e-b807-57cd1a7efdb1'

        }
    ])

    return await knex("message").insert([
        {
            content: 'This is a testing of a message',
            userId: '0c996d8c-a4c5-425e-b807-57cd1a7efdb1',
            channelId: '3812596d-77f2-4d39-94a8-04711b1b1fb3'
        }
    ]);
};
