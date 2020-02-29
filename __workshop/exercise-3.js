// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// Given a position (latitude and longitude), returns the position

const rp = require('request-promise');


let myPlace = '37.8267,-122.4233';

function getCurrentTemperatureAtPosition(position) {
 return rp('https://api.darksky.net/forecast/331f245f0582ee33e3e7ec063f5db7f3/' + position )   
        .then((data) => {
            const parsedData = JSON.parse(data);
            let temperature = parsedData.currently.temperature;
            return temperature;         
        })
        .catch((err) => {
            console.log('Error', err);
        });
}

getCurrentTemperatureAtPosition(myPlace).then(data => {
    console.log(data);
});