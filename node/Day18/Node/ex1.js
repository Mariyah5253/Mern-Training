


function welcome(name) {
   console.log(`Hello ${name}`);
}

// Invoking OR calling the function.
// [1] Named function
// [2] Anonymous function

welcome('Swati');
process.exit(125);      // Observe this exit status value.
console.log("Statement-1");
console.log("Statement-2");
console.log("Statement-3");
console.log("The next statement....");

// Recall - String
// Strings in JS can be specified in the following ways:
// [a] In Single Quotes
// [b] In Double Quotes
// [c] In BACKTICKS.  The special char ( ` ) to the left of the number key 1 or above TAB key
// If a string is represented in BACKTICKS, it is called a TEMPLATE STRING.
// Template strings can INTERPOLATE JS code.  
// In the above example, the referencing of the local variable is done -> ${name}