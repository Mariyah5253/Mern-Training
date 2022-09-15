const mysql = require('mysql');
const config = require('./config');

const con = mysql.createConnection(config);

con.connect(function (err) {
    if (err) {
        console.log("Connection Error...");
        console.error( err );
    }
    // Our SQL statement
    const sql = `SELECT * FROM todos`;

    con.query( sql, function (err, results, fields) {
        if (err) {
            console.error( err.message );
        }
        else {
            console.log('The tasks are as follows:');
            //console.log( results );
            results.forEach( row => {
                console.log("Todo ID   :" + row.id);
                console.log("Todo      :" + row.task);
                let status = (row.completed) ? "Yes" : "No"
                console.log("Completed :" + status );
                console.log();
            });
        }
    })

    con.end( (err) => {
        console.error( err );
    })
})

