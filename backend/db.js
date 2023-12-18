import mysql from "mysql2";

export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "demo",
    password: "1234"
});