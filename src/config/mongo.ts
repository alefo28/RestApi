import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect():Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI)
}

export default dbConnect;
/* 
const mysql = require('promise-mysql')

const getDbConnection = async () => {
    return await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.PORT
});



export default getDbConnection; */
