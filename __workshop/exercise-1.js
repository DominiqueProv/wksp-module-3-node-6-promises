// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

function getIssPosition() {
    return request('http://api.open-notify.org/iss-now.json')
        .then(res => {
            const issLocation = JSON.parse(res);
    return {
        lat: issLocation.iss_position.latitude,
        lng: issLocation.iss_position.longitude,
    }
});
}

// Returns the current position of the ISS

// NOTE:
// in order to see the result of the promise, you need to console.log
// the data WITHIN the promise chain (in its own then)

// You are 'returning' the value, beacause you will need this functionality
// in another exercise.

// If you console.log the the function call, you will not see the result as console.log
// doesn't wait for the promise to be resolved to execute.

// psst.... don't forget to call the function


// psst.... don't forget to call the function

getIssPosition();
