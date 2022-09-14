const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var fname;
var lname;
var age;
var gender;


rl.question(' Enter the first Name : ', (fname) => {
    rl.question('Enter the Last Name : ', (lname) => {
        

        rl.question('Enter the Your Age: ', (age) => {
        
            
            rl.question('Enter the Your Gender: ', (gender) => {
        
                console.log("Your Full Name is : ",fname+" "+lname);
                console.log("Your Age is : ",age);
                console.log("Your gender is : ",gender);
                console.log("Your Age next Year will be : ",parseInt(age)+1);
                process.exit();
                
            }); 
        });
    });
});