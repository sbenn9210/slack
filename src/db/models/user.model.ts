import { Model } from 'objection';

export default class User extends Model {
    id!: string
    name!: string
    username!: string
    email!: string
    password!: string

    static tableName = 'user'

    static jsonSchema = {
        type: 'object',
        required: ['name', 'username', 'email', 'password'],
        properties: {
            id: {type: 'string'},
            name: {type: 'string', minLength: 1, maxLength: 255},
            username: {type: 'string', minLength: 1, maxLength: 255},
            email: {type: 'string', minLength: 1, maxLength: 255},
            password: {type: 'string', minLength: 1, maxLength: 255},
        },
    }
}