const myFuns = require('./myfuns')
const names = require('./theData')

console.log(myFuns);
console.log(names);

// Invoke - FQN => Fully-Qualified-Name
//                 Module.method
myFuns.sayHello('Tom');
myFuns.sayHello(names.amar);
myFuns.sayHello(names.akbar);
myFuns.sayHello(names.antony);

myFuns.goodBye();


// console.log(module);

