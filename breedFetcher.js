const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
 
  if (error !== null) {
    return console.log(`The request resulted in an error`);
  }
  
  const data = JSON.parse(body);
  
  if (data.length === 0) {
    console.log(`${breed} cannot be found.`);
  } else {
    console.log(data[0].description);
  }
});