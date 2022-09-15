const fs = require('fs');

try {
    fs.readdir('C:/Training/Node', (err, fileList) => {
        fileList.forEach(theFile => {
            console.log(theFile);
        })
    });
}
catch (err) {
    console.error(err);
}



