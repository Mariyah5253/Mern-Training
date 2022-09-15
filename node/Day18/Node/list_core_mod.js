const coreModules = require('module').builtinModules;

console.log("The list of core modules are:")
coreModules.forEach(theModule => {
    console.log(theModule);
});

