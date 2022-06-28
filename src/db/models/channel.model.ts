
import { Model } from 'objection';

export default class Channel extends Model {
    id!: string
    name!: string
    teamId!: string
    public!: boolean

    static tableName = 'channel'

    static jsonSchema = {
        type: 'object',
        required: ["name", "teamId", "public"],
        properties: {
            id: {type: 'string'},
            name: {type: 'string', minLength: 1, maxLength: 255},
            teamId: {type: 'string'},
            public: {type: 'string'},
        },
    }
}