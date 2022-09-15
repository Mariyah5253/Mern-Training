const fs = require('fs');

var data = '';
var chunk;

const readerStream = fs.createReadStream('./assets/file1.txt');
readerStream.setEncoding('utf-8');

//handling stream event - readable
readerStream.on('readable', function () {
    while( (chunk = readerStream.read(1)) != null ){
        data += chunk;
        console.log(chunk);    
    }
})

/*
readerStream.on('end', () => {
    console.log(data);
})
*/

readerStream.on('error', (err) => {
    console.error(err);
})
