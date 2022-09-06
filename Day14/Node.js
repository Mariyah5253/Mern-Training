const local = require('repl');
const console = require('console');
local.start('$ ');
console.log(process.argv);
console.log("Testing Format Specifier");
console.log(`Hello  %s,Welcome To %s`," Mariya"," Blazeclan");
var a=22;
console.log(`Here Age is %d`,a);

console.log("Demo of Console.count()");
console.count("item1");
console.count("item2");
console.count("item2");
console.count("item1");

process.exit(11);