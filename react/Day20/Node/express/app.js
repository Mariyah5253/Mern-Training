const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('./public'));

app.get('/', function (req, res) {
    // res.status(200).send('<h1>Home Page!</h1>');
    res.sendFile(path.resolve(__dirname, './future_value/index.html'));
})

app.listen(port, function() {
    console.log(`Express app listening on port ${port}...`);
})

