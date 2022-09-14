const express=require('express');
const app=express();
const port  =3000;
const path=require('path')
app.get('/',function(req,res){
    res.send('<h1>Hello from Express!!</h1><h3>Fast, unopinionated, minimalist web framework </h3>')
});

app.listen(port,function(){
    console.log("It Worked !!");
});