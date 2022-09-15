const fs = require('fs');

var data = '';
const readerStream = fs.createReadStream('./assets/file1.txt');
readerStream.setEncoding('utf-8');

//handling stream events - data, end & error
readerStream.on('data', function (chunk) {
    data += chunk;
})

readerStream.on('end', () => {
    console.log(data);
})

readerStream.on('error', (err) => {
    console.error(err);
})
