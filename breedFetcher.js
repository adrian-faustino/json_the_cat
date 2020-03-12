// https://api.thecatapi.com/v1/breeds/search?q= [enter query here]
// https://api.thecatapi.com/vi/breeds/search?q=Siberian

//NOTES: JSON.parse reads STRINGS that have an object inside. (From queries)
//NOTES: JSON.stringify? MAKES an object into a string so we can send it out...

const userInput = process.argv.slice(2);
const URL = 'https://api.thecatfapi.com/v1/breeds/search?q=';
const breedName = userInput[0];
const query = URL + breedName;

const request = require('request');

request(`${query}`, (error, response, body) => {
  if (error) {
    throw new Error(`${error.code} wow`);
  }
  if (body.length === 2) {
    throw new Error('Breed not found :)');
  }
  const data = JSON.parse(body)[0];
  const description = data['description'];

  
  console.log(description);
});