
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const { resolve } = require('path/posix');
var info = {};

const rl = readline.createInterface({input, output});
new Promise( (res, rej) => {
    try {
        rl.question('Name :', name);
        console.log(name);
    }
    catch (e) {
        throw new Error(e) ;
    }
});

/*
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

*/
