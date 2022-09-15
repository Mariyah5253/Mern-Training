const express = require('express');

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.status(200).send('<h1>Home Page!</h1>');
})

app.get('/about', function (req, res) {
    res.send('<h1>About Page!</h1>');
})

app.all('*', function (req, res) {
    res.status(404).send(`
    <h1>Oops!</h1>
    <p>Page NOT Found...</p>
    <a href='/'>Home</a>
    `);
})

app.listen(port, function() {
    console.log(`Express app listening on port ${port}...`);
})

