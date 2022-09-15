// Understanding Command Line Arguments

console.log("Example - Command Line Arguments..");

// Getting the command line arguments. Available in process.argv Array
process.argv.forEach(( value, index ) => {
    console.log(`${index} : ${value}`);
});

console.log(`No. of command line args: ${process.argv.length} `)
console.log("End of program!");
