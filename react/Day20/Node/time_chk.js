// Checking the time spent.

const doSomething = () => {
    for(let i=1; i<=10; i++) {
        console.log('Testing...');    
    }
}

const measureDoSomething = () => {
    console.time('doSomething');
    doSomething();   // Calling the doSomething fuction
    console.timeEnd('doSomething');
}

console.log("\x1b[33m Checking Tine Spent.... \x1b[0m");
measureDoSomething();
console.log("\x1b[31m Checking color.... \x1b[0m");
console.log("\x1b[33m Checking color.... \x1b[0m");
console.log("\x1b[35m Checking color.... \x1b[0m");