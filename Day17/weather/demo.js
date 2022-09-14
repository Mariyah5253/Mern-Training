const request = require('request');

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  qs: {q:null},
  headers: {
    'X-RapidAPI-Key': '27b7deef52msh31953d3497f5799p1e46dcjsn6fed9e151116',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);
console.log(body);
});