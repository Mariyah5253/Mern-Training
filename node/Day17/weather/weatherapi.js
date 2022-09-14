//const axios = require("axios");
console.log("From Weatherapi.js");
const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  
  headers: {
    'X-RapidAPI-Key': '27b7deef52msh31953d3497f5799p1e46dcjsn6fed9e151116',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

document.getElementById("btn").addEventListener("click", (event) => {
    
    event.preventDefault();
    const city = document.getElementById("inp").value;
  
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(`Temperature is : ${response.current.temp_c}`);
        console.log(`Humidity is : ${response.current.humidity}`);
        console.log(`Location is : ${response.location.name}`);
      })
      .catch((err) => console.error(err));
  });
  