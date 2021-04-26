const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');

const productRoutes = require('./routes/product');

mongoose.connect('mongodb://localhost:27017/shopApp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    });


// seedDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));


app.use(productRoutes);


app.get('/', (req, res) => {
    
    res.send("LANDING PAGE");
})





app.listen(3000, () => {
    console.log("Server Started AT PORT 3000");
})