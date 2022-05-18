// File dependencies
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// Expres middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other requests not found
app.use((req, res) => {
    res.status(404).end();
});

// Starts the server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});