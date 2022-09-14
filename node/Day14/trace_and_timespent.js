const local = require('repl');
const console = require('console');
const { trace } = require('console');
const { DiffieHellmanGroup } = require('crypto');
local.start('$ ');
function forloop()
{
    var b=0;
    
    for( var i=0;i<1000;i++)
    {
     b+=1;  
    }

}
function hello1()

{
    console.log("Hello function is running");
    greet();
}
function greet()
{   

    console.log("Greet Function is running");
    console.trace();
}
function welcome()
{
    console.log("Wlecome functin is running");
    hello1();

    
    
    

}
//welcome();
console.time();
forloop();
console.timeEnd();

process.exit(0);