
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
var info = {};

const rl = readline.createInterface({input, output});
rl.question('Name :', (name) => {
    info.name = name;
    rl.question('Gender :', (gender) => {
        info.gender = gender;
        rl.question('Email :', (email) => {
            info.email = email;
            rl.close();
            displayInfo(info);
        })
    })
});

function displayInfo(personInfo){
    console.log(`Name   : ${personInfo.name}`);
    //console.log(`Gender : ${personInfo.gender}`);
}


