const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Replace with your actual MySQL username
    password: '', // Replace with your actual MySQL password
    database: 'tanzania_camping' // Replace with your actual database name
});

module.exports = pool.promise(); 