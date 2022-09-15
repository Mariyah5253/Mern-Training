// const express = require('express');
const app = require('express')();
// const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.status(201).send('<h1>Hello Express World!</h1>');
})

app.listen(port, function() {
    console.log(`Express app listening on port ${port}...`);
})

/*
app.get             Read data
app.post            Insert data
app.put             Update data
app.delete          Delete data
app.all             
app.use             Middleware
app.listen          The port where the app is listening
*/