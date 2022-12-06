const mysql = require("mysql");
require("dotenv/config");

const db = mysql.createConnection({
    host:process.env.LOCALHOST,
    user:process.env.HOSTNAME,
    password:process.env.PASSWORD,
    database:process.env.DATABASE_NAME
})

db.connect((err) => {
    if(err) throw err;
    console.log("Database Connected");
})

module.exports = {db};