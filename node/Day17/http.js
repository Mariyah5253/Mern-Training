const http=require('http');
const server =http.createServer((req,res) =>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/html");
    
    res.end("<h1>Hello Http Server</h>")
});


server.listen(5000,()=>{
    console.log("Server running at port 5000...");
});