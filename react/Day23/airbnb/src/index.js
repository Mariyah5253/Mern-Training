import React from 'react';
import ReactDom from "react-dom";
import App from './App';


function Page(){
    return(
    <App/>
       
    )
}
//ReactDom.render(page,document.getElementById("root"))
ReactDom.render(<Page/>,document.getElementById("root"));