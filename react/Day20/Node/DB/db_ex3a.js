const mysql = require('mysql');
const config = require('./config');

const con = mysql.createConnection(config);

con.connect(function (err) {
    if (err) {
        console.log("Connection Error...");
        console.error( err );
    }
    // Our SQL statement
    const sql = `INSERT INTO todos(task, completed)
                 VALUES('Attend Node.js Training', true)`;

    con.query( sql, function (err, results, fields) {
        if (err) {
            console.error( err.message );
        }
        else {
            console.log('Row inserted successfully....');
        }
    })

    con.end( (err) => {
        console.error( err );
    })
})

