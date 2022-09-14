const { Console } = require('console');
const fs=require('fs');
var read=fs.createReadStream('myfile');
var write=fs.createWriteStream('myfile2');
read.pipe(write);
console.log("piping successfull");
