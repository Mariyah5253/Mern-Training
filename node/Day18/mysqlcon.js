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
    
    
    const q1=' create table if not exists todos(deptid int primary key auto_increment,deptName varchar(15) not null,city varchar(10) not null);'
    pool.query(q1,function(err,result,fields){
        if(err)
        {
            console.log(err.message);
        }
    });
    

    /* [a] inserting by directly providing literal */
    const q2=" insert into todos values(1,'Accounting','New York');";
    const q3=" insert into todos values(2,'Research','Dallas');";
    pool.query(q2,function(err,result,fields){
        if(err)
        {
            console.log(err.message);
        }
    });
    pool.query(q3,function(err,result,fields){
        if(err)
        {
            console.log(err.message);
        }
    });
    /*[b] Using template string;*/
    let q4=`insert into todos values(?,?,?);`;
    values=[3,'Sales','Chicago'];

    pool.query(q4,values,function(err,result,fields){
        if(err)
        {
            console.log(err.message);
        }
    });
     /* [c] inserting by taking argument from command line */
    var dep_id=parseInt(process.argv[2]);
    var dep_name=process.argv[3];
    var city=process.argv[4];
    var aray=[dep_id,dep_name,city];
    q5=`insert into todos values (?,?,?)`;

    pool.query(q5,aray,function(err,result,fields){
        if(err)
        {
            console.log(err.message);
        }
    }); 
    const q6=" insert into todos values(5,'R&D','Pune');";
    pool.query(q6,function(err,result,fields){
        if(err)
        {
            console.log(err.message);
        }
    });

    pool.end(function (err){
        if(err)
        {
            console.log(err.message);
        }
    });
    



});



  