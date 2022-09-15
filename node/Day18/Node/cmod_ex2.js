// Understanding DE-STRUCTUREing

// Advantage:
// [1] Only get those function(s)/data 
// [2] We can directly use them without FQN

const {sayHello} = require('./myfuns')
const {amar, akbar} = require('./theData')

sayHello('Tom');
sayHello(amar);
sayHello(akbar);
//sayHello(antony);


//goodBye();


// console.log(module);

