
const fs = require('fs');

const theDir = "C:/nodir";

fs.readdir(theDir, function(err, files) {
    if (err) {
        console.log("Error:" + err.message);
    }
    else {
        files.forEach(theFile => {
            console.log(theFile);
        });
    }
})