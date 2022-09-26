import React from 'react';
import ReactDom from "react-dom";
import App from './Components/App';
var page=<h1>Hello Once Again !!</h1>

function Page(){
    return(<App/>
       
    )
}
//ReactDom.render(page,document.getElementById("root"))
ReactDom.render(<Page/>,document.getElementById("root"));