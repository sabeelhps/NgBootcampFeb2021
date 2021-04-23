const express = require('express');
const router = express.Router();
const Product = require('../models/product');


// Get All the products
router.get('/products', async(req, res) => {
    const products=await Product.find({});
    res.render('index', { products });
})


// Form to Create New Product

router.get('/products/new', (req, res) => {
    res.render('new')
})


router.post('/products', async(req, res) => {

    const product = req.body;

    await Product.create(product);
    
    res.redirect('/products');
})

router.get('/products/:id', async(req, res) => {

    const product=await Product.findById(req.params.id);

    res.render('show',{product})
})


router.get('/products/:id/edit', async(req, res) => {
    
    const product=await Product.findById(req.params.id);

    res.render('edit', { product });
})

router.patch('/products/:id', async(req, res) => {
    
    await Product.findByIdAndUpdate(req.params.id, req.body);

    res.redirect(`/products/${req.params.id}`);
})

router.delete('/products/:id', async(req, res) => {
    
    await Product.findByIdAndDelete(req.params.id);

    res.redirect('/products');
})


module.exports = router;