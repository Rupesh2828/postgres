import { Client } from "pg";
require('dotenv').config();

export const client = new Client({
    connectionString: `postgresql://neondb_owner:${process.env.PASSWORD}@ep-patient-star-a5wyzbr4.us-east-2.aws.neon.tech/neondb?sslmode=require`
})


async function createUser() {
    await client.connect()
    const result = await client.query(`
        
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        
        )
        
        `)
    console.log(result);

}

createUser()