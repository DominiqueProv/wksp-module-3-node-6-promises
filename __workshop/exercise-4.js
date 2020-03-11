// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function



const opencage = require('opencage-api-client');
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




function getAddressPosition(address) {
    const requestObj = {
        key: 'b04c215e61ab4a1daec1e6af5d413d14',
        q: address
    };
    return opencage.geocode(requestObj)
        .then(data => {
      if (data.status.code == 200) {
        if (data.results.length > 0) {
          const place = data.results[0];
          return place;
        }
      } else if (data.status.code == 402) {
        console.log('Error');
      } else {
        console.log('error', data.status.message);
      }
    })
    .then(body => console.log(body))
    .catch(error => {
    console.log('error', error.message);
    });
}


getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');

function getCurrentTemperature(address) {

}