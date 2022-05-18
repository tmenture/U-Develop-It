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

// Gets all candidates in table
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// Gets a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// Deletes a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//Creates a new candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Default response for any other requests not found
app.use((req, res) => {
    res.status(404).end();
});

// Starts the server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});