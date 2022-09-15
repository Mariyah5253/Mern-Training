const mysql = require('mysql');
const config = require('./config');

const con = mysql.createConnection(config);

con.connect(function (err) {
    if (err) {
        console.log("Connection Error...");
        console.error( err );
    }
    // Our SQL statement with placeholders
    const sql = `INSERT INTO todos(task, completed)
                 VALUES(?, ?)`;

    const theTask = ['Complete Node.js Assignment', false];
    con.query( sql, theTask, function (err, results, fields) {
        if (err) {
            console.error( err.message );
        }
        else {
            console.log('Row inserted successfully....');
            // Getting the last inserted ID
            console.log("Todo ID :" + results.insertId);
        }
    })

    con.end( (err) => {
        console.error( err );
    })
})

