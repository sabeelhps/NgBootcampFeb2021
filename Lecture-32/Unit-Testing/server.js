const express = require('express');
const app = express();
const path = require('path');
const {fareInfo,calculateFare } = require('./fareUtils');

app.use('/', express.static(path.join(__dirname, '/public')));

app.use(express.json());


app.post('/calfare', (req, res) => {
    
    const km = req.body.km;
    const min = req.body.min;

    let fare = calculateFare(km, min);
  
    res.send({ totalFare: fare });
})

app.get('/rates', (req, res) => {

    res.send(fareInfo);
})

module.exports = app;