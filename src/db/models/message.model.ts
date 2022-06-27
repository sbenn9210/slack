
import { Model } from 'objection';

export default class Message extends Model {
    id!: string
    content!: Text
    userId!: string
    channelId!:string

    static tableName = 'message'

    static jsonSchema = {
        type: 'object',
        required: ['content', 'userId', 'channelId'],
        properties: {
            id: {type: 'string'},
            content: {type: 'text'},
            userId: {type: 'string'},
            channelId: {type: 'string'},
        },
    }
}