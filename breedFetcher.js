const request = require('request');
let breedName;


const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    if (error !== null) {
      callback(error, null);
    }
  
    const data = JSON.parse(body);
  
    if (data.length === 0) {
      callback(null, `${breedName} cannot be found.`);
    } else {
      callback(null, data[0].description);
    }
  });

};



module.exports = fetchBreedDescription;