// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");
export default function handler(req, res) {
  

  const options = {
    method: 'GET',
    url: 'https://theaudiodb.p.rapidapi.com/searchalbum.php',
    params: {s: 'daft_punk'},
    headers: {
      'X-RapidAPI-Key': '694c32b75dmsh32221dac2471acbp191645jsn6060e840fdd6',
      'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}
