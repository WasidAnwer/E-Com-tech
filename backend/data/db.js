const mysql = require("mysql2");
require("dotenv").data();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.log("database error" + err.message);
    }
    else {
        console.log("Connected to MySQL Database");
    }
});
module.exports = db;