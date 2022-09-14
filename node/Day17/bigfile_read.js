const http=require('http');
const fs = require('fs');
const server =http.createServer((req,res) =>{
    res.statusCode=200;
    console.log("yusuf");
    res.setHeader("Content-Type","text/html");
    const readable=fs.createReadStream('bigfile');
    var data='';
    readable.on('readable',function(){
        chunck=" ";
        while(chunck!=null){
            chunck=readable.read();
            var p=`${chunck}`; 
            data+=p;     
    
        }
        

        res.end(data);
  
    });
   


});



server.listen(5000,()=>{
    console.log("Server running at port 5000...");
});