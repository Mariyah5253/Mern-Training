let mysql = require ('mysql');
var pool =mysql.createConnection({
connectionLimit:5,
host:'localhost',
user:'root',
password:"Mariya@5253",
database:'hr_db'
});


var readline = require('readline');
  
var rl = readline.createInterface(
        process.stdin, process.stdout);

pool.connect((err)=>{
    if(err) throw err;
    
    
    const q1=`Select * from todos where city=?`;
    r1.question("Enter city",(answer)=>{
        console.log(answer);
        pool.query(q1,[answer],(err,result,field)=>{
            if(err)
            {
                console.log(err);
            }
            else{
            console.log(result);}

        });

    });
   
    
});


  

