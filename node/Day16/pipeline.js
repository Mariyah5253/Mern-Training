const {pipeline} =require('stream');
const fs=require('fs');
const zlib=require('zlib');

pipeline(
    fs.createReadStream('myfile', ),
    zlib.createGzip(),
    fs.createWriteStream('myfile2'),
    (err) =>{
        if(err){
            console.error('pipeline failed',err);

        }
        else{
            console.log("pipeline succeeded !!");

        }
    }
);
