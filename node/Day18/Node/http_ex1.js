const http = require('http');

const server = http.createServer( (req, res) => {
    // console.log("User HIT the server");
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
    <h1>Hello from HTTP Server</h1>
    <p>Used the res.writeHead(), res.write() and res.end() method</p>
    `);
    res.end();
    // console.log(req.method);
    // console.log(req.url);
})

server.listen(5000, () => {
    console.log("Server listening at port 5000....");
});
