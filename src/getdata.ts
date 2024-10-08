import { Client } from "pg";
require('dotenv').config();

async function getData( email:string){

    const client = new Client({
        connectionString: `postgresql://neondb_owner:${process.env.PASSWORD}@ep-patient-star-a5wyzbr4.us-east-2.aws.neon.tech/neondb?sslmode=require`
    })

    try {
        await client.connect()

        const queryData = "SELECT * FROM users WHERE email = $1"

        const values =  [ email]
        const result = await client.query(queryData, values)

        if (result.rows.length > 0) {
            console.log("User found: ", result.rows[0]);
            return result.rows[0]
            
        } else {
            console.log("No user found");
            return null;
            
        }
        

        
    } catch (error) {
        console.log("Error while inserting data", error);
        
    } finally{
        await client.end()
    }
    
}
getData('rupesh@gmail.com')