const { Console } = require("console");
const fs = require("fs");
/*console.log("Asynchronous Way Of Reading the file ");
const { Console } = require("console");
const fs = require("fs");
fs.readFile("textfile","utf8",(err,data)=>{
    if(err){console.log("Error!! Snapp",err);
}
else{
    console.log(data);
    
}
})

*/

try { 
    console.log("Synchronous Way Of Reading the file ");
    var data = fs.readFileSync("textfile", "utf8"); }
catch (err) { console.log(err); }
 

console.log(data);
console.log(typeof data);
