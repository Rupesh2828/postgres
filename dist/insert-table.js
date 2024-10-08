"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require('dotenv').config();
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: `postgresql://neondb_owner:${process.env.PASSWORD}@ep-patient-star-a5wyzbr4.us-east-2.aws.neon.tech/neondb?sslmode=require`
        });
        try {
            yield client.connect();
            const queryData = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
            const values = [username, email, password];
            const result = yield client.query(queryData, values);
            console.log(result);
        }
        catch (error) {
            console.log("Error while inserting data", error);
        }
        finally {
            yield client.end();
        }
    });
}
insertData('deepak', 'deepak@gmai.com', '123');
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
