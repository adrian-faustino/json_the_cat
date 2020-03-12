// https://api.thecatapi.com/v1/breeds/search?q= [enter query here]
// https://api.thecatapi.com/vi/breeds/search?q=Siberian

//NOTES: JSON.parse reads STRINGS that have an object inside. (From queries)
//NOTES: JSON.stringify? MAKES an object into a string so we can send it out...

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
  const query = URL + breedName;
  request(`${query}`, (error, response, body) => {
    //if invalid URL...
    if (error) {
      return callback(error.code);
    }

    //if breed doesn't exist...
    if (body.length === 2) {
      return callback('Breed not found!');
    }

    //if passed all checks...
    const data = JSON.parse(body)[0];
    const description = data['description'].trim();
  
    return callback(null, description);
  });  
};

module.exports = { fetchBreedDescription }