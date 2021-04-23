const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override')
const Product = require('./models/product');
const productRoutes = require('./routes/product');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


// -----Database stuff---------------

mongoose.connect('mongodb://localhost:27017/shopApp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch(err => {
        console.log("Connection Error");
        console.log(err);
    });

seedDB();


// Routes
app.use(productRoutes);


app.listen(3000, () => {
    console.log("Server running at port 3000");
})