const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'blazeclan',
});

conn.connect(function (err) {
    if (err) {
        console.log("Connection Error...");
        console.error( err );
    }
    else {
        console.log("Successfully connected....");
    }
})

conn.end(function (err) {
    if (err) {
        console.error(err);
    }
})
