import knex from 'knex' 
import knexfile from '../knexfile'
import { Model } from 'objection'

const db = knex(knexfile.development)  
Model.knex(db)

let cached = global.pg
if (!cached) cached = global.pg = {}    

export function dbConn() {     
    if (!cached.instance) {       
        cached.instance = db     
    }     
    return cached.instance    
} 
