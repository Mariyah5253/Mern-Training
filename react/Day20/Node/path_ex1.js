const path = require('path');

// Absolute Path to the file 'file1.txt'
// const fileName = "C:\\Training\\Node\\assets\\file1.txt";
const fileName = ".\\assets\\file1.txt";

// Why TWO \\ in the pathname?
const anotherFile = "E:\\MongoDB\\new_folder\\testsample.cvs";
const gradeObtained = "Raj got \"A\" grade in his exam!";

dname = path.dirname(fileName);
bname = path.basename(fileName);
exname = path.extname(fileName);

console.log(`Direcorty : ${dname}`);
console.log(`Filename  : ${bname}`);
console.log(`Extension : ${exname}`);

/*
console.log(`Another File location:`);
console.log(anotherFile);
console.log(gradeObtained);
*/
console.log(path.resolve(fileName));
console.log(path.isAbsolute(fileName));
console.log(path.isAbsolute(anotherFile));





