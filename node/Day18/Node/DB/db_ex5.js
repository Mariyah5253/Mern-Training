const mysql = require('mysql');
const config = require('./config');

const con = mysql.createConnection(config);

con.connect(function (err) {
    if (err) {
        console.log("Connection Error...");
        console.error( err );
    }
    // Our DML statement
    const sql = `UPDATE todos
    SET completed = ?
    WHERE id = ?`;

    con.query( sql, [false, 2], function (err, results, fields) {
        if (err) {
            console.error( err.message );
        }
        else {
            console.log('Updation complete!');
            console.log( "Row(s) affected :" + results.affectedRows );
        }
    })

    con.end( (err) => {
        console.error( err );
    })
})

