const mysql = require('mysql2');

// Connecting to Database
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'MarLey2015!!',
        database: 'election'
    },
    console.log('Conneted to the election database.')
);

module.exports = db;