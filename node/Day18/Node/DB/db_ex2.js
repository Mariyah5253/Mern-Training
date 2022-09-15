const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'blazeclan',
});

con.connect(function (err) {
    if (err) {
        console.log("Connection Error...");
        console.error( err );
    }
    // Our DDL statement
    const todos = `CREATE TABLE IF NOT EXISTS todos (
        id          int PRIMARY KEY AUTO_INCREMENT,
        task        varchar(50) NOT NULL,
        completed   tinyint(1)  NOT NULL DEFAULT 0
    )`;

    con.query( todos, function (err, results, fields) {
        if (err) {
            console.error( err.message );
        }
        else {
            console.log('Table created successfully....');
        }
    })

    con.end( (err) => {
        console.error( err );
    })
})

