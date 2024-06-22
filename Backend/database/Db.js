import mysql from "mysql2/promise.js";
import "dotenv/config"

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

async function connection () {
    try {
        await db.getConnection();
        console.log("Database connected");
    } catch (error) {
        console.log("Database not connected", error);
    }
}

async function query(command, values) {
    try {
        const [results] = await db.query(command, values ?? []);
        return results;
    } catch (error) {
        console.error("Database query error:", error);
        throw error;
    }
}

export {connection, query};