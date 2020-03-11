// Exercise 2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');


function getAddressPosition(address) {
    const requestObj = {
        key: 'b04c215e61ab4a1daec1e6af5d413d14',
        q: address
    };

    return opencage.geocode(requestObj)
        .then(data => {
      // console.log(JSON.stringify(data));
      if (data.status.code == 200) {
        if (data.results.length > 0) {
          const place = data.results[0];
          return place;
        }
      } else if (data.status.code == 402) {
        console.log('Error');
      } else {
        // other possible response codes:
        // https://opencagedata.com/api#codes
        console.log('error', data.status.message);
      }
    })
    .then(body => console.log(body))
    .catch(error => {
    console.log('error', error.message);
    });
}


getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');


