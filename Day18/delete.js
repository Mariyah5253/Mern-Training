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
   let sql1=`delete from  todos where deptName=?`;
   pool.query(sql1,['R&D'],(err,results,fields) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(results);
    }
  
});


   
    pool.end(function (err){
        if(err)
        {
            console.log(err.message);
        }
    });


    
  


});



  