const fs = require('fs');

const stream = fs.createReadStream('./assets/big_file.txt');

// The 'data' event on the 'stream' object
stream.on('data', (result) => {
    console.log(result);
})
