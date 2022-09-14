const http=require('http');
const fs=require('fs');
const server =http.createServer((req,res) =>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/html");
    if(req.url==='/'){
        res.end("<center><img src='https://socialdonut.co/wp-content/uploads/2020/04/Blazeclan_Logo.png' style='height:50%;width:50%;'></center>");
    
    }
    else if(req.url==='/about')
    {
       
        res.writeHead(200,{'Content-type':'text/html'});
               
    
        res.end(
            
            `<div><h1>Mission</h1>
            <h3>
            We are on a revolutionary path of leading excellence on cloud; by offering robust yet dynamic cloud technology to leverage our capabilities of providing business flexibility, reduced operational costs, decreased time to market, and the security and scalability of enterprise workloads for our valuable customers.</h3>
          
           <h1>Vision</h1>
           
           <h4>As a trusted yet dynamic digital transformation partner – as dynamic as the cloud itself – we will continue to broaden the horizons of the business landscape through innovative and in-depth enterprise disruption.

           The ‘Blazeclan Way’ is defined by the following values upon which we base our ideas, solutions, business & people policies
           </h4></div>`

            );
     
        }
    
    else if(req.url==='/contact')
    {
        res.writeHead(200,{'Content-type':'text/html'});
               
    
        res.end(
            `<h2>The address</h2>
            <p>A-Wing, 8th Floor, Godrej Eternia C, Old Pune Mumbai Highway, Wakdewadi, Shivajinagar, Pune </p>
            <h2>The URL for the company</h2>
            <p>https://www.blazeclan.com/</p>
            <h2>The email address for info</h2>
            <p>sales@blazeclan.com</p>
            <h2>Phone Number</h2>
            <p>Contact: 020-67611100</p>
            `
            

        );
    }
    else{
    res.writeHead(404,{'Content-type':'text/html'});
    res.end("<h1>Not A valid Url</h1>");}
});


server.listen(5000,()=>{
    console.log("Server running at port 5000...");
});