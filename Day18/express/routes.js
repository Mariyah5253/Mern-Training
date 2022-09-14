const express=require('express');
const app=express();
const port  =3000;

app.get('/',function(req,res){
    res.send('<h1>Welcome to Express!!</h1><h3>Fast, unopinionated, minimalist web framework </h3>')
});


app.get('/api',function(req,res){
    res.send(`<h1>Apis</h1><p>With a myriad of HTTP utility methods and middleware at your disposal, 
    creating a robust API is quick and easy. </p>`)
});

app.get('/performance',function(req,res){
    res.send(`<h1>Performance</h1><p> Express provides a thin layer of fundamental web application features, without 
    obscuring Node.js features that you know and love </p>`)
});


app.get('/frameworks',function(req,res){
    res.send(`<h1>Frameworks built on Express</h1>
    <ul>
    <li>Feathers: Build prototypes in minutes and production ready real-time apps in days.</li>
    <li>ItemsAPI: Search backend for web and mobile applications built on Express and Elasticsearch.</li>
    <li>KeystoneJS: Website and API Application Framework / CMS with an auto-generated React.js Admin UI.</li>
    <li>Poet: Lightweight Markdown Blog Engine with instant pagination, tag and category views.</li>
    <li>Kraken: Secure and scalable layer that extends Express by providing structure and convention.</li>
    <li>LoopBack: Highly-extensible, open-source Node.js framework for quickly creating dynamic end-to-end REST APIs.</li>
    <li>Sails: MVC framework for Node.js for building practical, production-ready apps.</li>
    <li>Blueprint: a SOLID framework for building APIs and backend services</li>
    <li>Locomotive: Powerful MVC web framework for Node.js from the maker of Passport.js</li>
    <li>graphql-yoga: Fully-featured, yet simple and lightweight GraphQL server</li>
    <li>Express Gateway: Fully-featured and extensible API Gateway using Express as foundation</li>
    </ul>`)
});


app.all('*',(req,res)=>{
    res.status(404).send(`<h1>Opps!!<h1><p>Page Not Found</p>
    <a href='/'>Home</a>`)
})
app.listen(port,function(){
    console.log("It Worked !!");
});