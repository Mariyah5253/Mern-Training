import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';



function Page(){

return (<>
  <Header/>
  <MainContent/>
  <Footer/>
  </>
)
}

ReactDOM.render(<Page/>,document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
