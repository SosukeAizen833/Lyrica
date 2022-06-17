const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://genius.p.rapidapi.com/search',
  params: {q: 'Kendrick Lamar'},
  headers: {
    'X-RapidAPI-Key': '694c32b75dmsh32221dac2471acbp191645jsn6060e840fdd6',
    'X-RapidAPI-Host': 'genius.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});