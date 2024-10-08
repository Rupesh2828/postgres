import { Client } from "pg";
require('dotenv').config();

async function insertData(username:string, email:string, password: string){

    const client = new Client({
        connectionString: `postgresql://neondb_owner:${process.env.PASSWORD}@ep-patient-star-a5wyzbr4.us-east-2.aws.neon.tech/neondb?sslmode=require`
    })

    try {
        await client.connect()

        const queryData = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)"
        const values =  [username, email, password]
        const result = await client.query(queryData, values)

        console.log(result);
        
    } catch (error) {
        console.log("Error while inserting data", error);
        
    } finally{
        await client.end()
    }
    
}
insertData('deepak', 'deepak@gmai.com', '123')


//Below code is not feasible in terms of security as the input field is being hardcoded

// import { Client } from "pg";

// export const client = new Client({
//     connectionString: "postgresql://neondb_owner:@ep-patient-star-a5wyzbr4.us-east-2.aws.neon.tech/neondb?sslmode=require"
// })

// async function insertData() {
//     await client.connect();

//     const result1 = await client.query(`
        
//         INSERT INTO users (
        
//         username,
//         email,
//         password 

//         )
//         VALUES ('rupesh', 'rupesh@gmail.com', 12345)
        
//         `)
    
//     console.log(result1);
        

// }
// insertData()


