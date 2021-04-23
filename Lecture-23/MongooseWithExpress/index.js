const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
// const seedDB = require('./seed');
var methodOverride = require('method-override')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


// Database stuff---------------

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB Connected");
    })
    .catch(err => {
        console.log("Connection Error");
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        min:0
    },
    desc: {
        type:String
    }
})


const Product = mongoose.model('Product', productSchema);


// seedDB();



// Get All the products
app.get('/products', async(req, res) => {
    const products=await Product.find({});
    res.render('index', { products });
})


// Form to Create New Product

app.get('/products/new', (req, res) => {
    res.render('new')
})




app.post('/products', async(req, res) => {

    const product = req.body;

    await Product.create(product);
    
    res.redirect('/products');
})

app.get('/products/:id', async(req, res) => {

    const product=await Product.findById(req.params.id);

    res.render('show',{product})
})


app.get('/products/:id/edit', async(req, res) => {
    
    const product=await Product.findById(req.params.id);

    res.render('edit', { product });
})

app.patch('/products/:id', async(req, res) => {
    
    await Product.findByIdAndUpdate(req.params.id, req.body);

    res.redirect(`/products/${req.params.id}`);
})

app.listen(3000, () => {
    console.log("Server running at port 3000");
})