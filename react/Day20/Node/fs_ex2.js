const fs = require('fs');

try {
    const data = fs.readFileSync('./assets/file1.txt', 'utf-8' );
    console.log(data);
}
catch (err){
    console.error("Some error!!!");
    // console.error(err);
    process.exit(121);
}


