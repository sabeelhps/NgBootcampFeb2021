// const textData = `{"ticker":{"base":"BTC","target":"USD","price":"58644.00531423","volume":"30840.50161891","change":"145.79436814"},"timestamp":1617202443,"success":true,"error":""}`;


// const data = JSON.parse(textData);

// console.log(data);
// console.log(data.ticker.price);

// =======================Sending AJAX Requests Using JS=======

// oldest way of sending request

// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log(this.responseText);
//     const data = JSON.parse(this.responseText);

//     console.log(data.ticker.price);

// }

// req.onerror = function () {
//     console.log(err);
// }
// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();


// -------------------------------------------
// New Way of sending Request

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(data => {
        console.log(data);
        return data.json();
    })
    .then(parsedData => {
        console.log(parsedData.ticker.price);
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })