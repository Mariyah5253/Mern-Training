function f1() {
    console.log("First function...");
    console.trace();
}
function f2() {
    f1();
    console.log("Second function...");
}
function f3() {
    f2();
    console.log("Third function...");
}
function main() {
    // The main() function invokes f3()
    f3();
}
main();  // Calling the main() function



