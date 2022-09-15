const fs = require('fs');

fs.readFile('./assets/file1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log(data);
    }
})

