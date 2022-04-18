// lib/db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'karla',
    database: 'productos',
    password: '123'
});

connection.connect();
module.exports = connection;