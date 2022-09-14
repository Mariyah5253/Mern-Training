var fs=require("fs");

const { Console } = require("console");

fs.writeFile("myfile", "hello!! We are  Writing thr file asychronously", (err)=>{
    if(err){
    console.log("Error !! Snap ",err);}
    else{
        console.log("Wrote Successfully");
    }
});


try{
    fs.writeFileSync("myfile1","Hii, Writing In File Synchronoulsy ");
    console.log("Wrote Successfully");

    
}
catch(err)
{
    console.log("Error Didnt able to wrtie in the file",err);
}

