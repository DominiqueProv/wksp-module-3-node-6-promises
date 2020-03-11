// Exercise 3 - `getAddressPosition`
// ---------------------------------

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