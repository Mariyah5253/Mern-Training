const http = require('http');

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.end("<h1>Welcome to HOME Page!<h1>");
    }
    else if (req.url === '/about') {
        res.end("<h1>About!</h1>");
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page you are looking for</p>
        <a href='/'>Home</a>
        `)
    }
})

server.listen(5000, () => {
    console.log("Server listening at port 5000....");
});
