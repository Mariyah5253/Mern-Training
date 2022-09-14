let mysql = require ('mysql');
var pool =mysql.createConnection({
connectionLimit:5,
host:'localhost',
user:'root',
password:"Mariya@5253",
database:'hr_db'
});



pool.connect((err)=>{
    if(err) throw err;
    /*let sql=`select * from todos`;

    pool.query(sql,(err,results,fields) =>{
        if(err){
            console.log(err);
        }
        console.log(results);
    });
    
    */
   let sql1=`select * from todos where deptName=?`;
   var dep_name=process.argv[2];
   pool.query(sql1,[dep_name],(err,results,fields) =>{
    if(err){
        console.log(err);
    }
    console.log(results);
});


   
    pool.end(function (err){
        if(err)
        {
            console.log(err.message);
        }
    });


    
  


});



  