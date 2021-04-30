const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');


// Display all the products
router.get('/products', async(req, res) => {
    
    try {
        const products=await Product.find({});
        res.render('products/index',{products}); 
    } catch (e) {
        console.log("Something Went Wrong");
        req.flash('error', 'Cannot Find Products');
        res.render('error');
    }
})


// Get the form for new product
router.get('/products/new', (req, res) => {
    res.render('products/new');
})


// Create New Product
router.post('/products', async(req, res) => {

    try {
        await Product.create(req.body.product);
        req.flash('success', 'Product Created Successfully');
        res.redirect('/products');
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot Create Products,Something is Wrong');
        res.render('error');
    } 
});


// Show particular product
router.get('/products/:id', async(req, res) => {
    try {
        const product=await Product.findById(req.params.id).populate('reviews');
        res.render('products/show', { product});
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot find this Product');
        res.redirect('/error');
    }
})

// Get the edit form
router.get('/products/:id/edit', async(req, res) => {

    const product=await Product.findById(req.params.id);

    res.render('products/edit',{product});
})

// Upadate the particular product
router.patch('/products/:id', async(req, res) => {
    
    await Product.findByIdAndUpdate(req.params.id, req.body.product);

    req.flash('success', 'Updated Successfully!');
    res.redirect(`/products/${req.params.id}`)
})


// Delete a particular product
router.delete('/products/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
})




// Creating a New Comment on a Product

router.post('/products/:id/review', async (req, res) => {
    
    const product = await Product.findById(req.params.id);
    const review = new Review(req.body);
    console.log(review);

    product.reviews.push(review);

    await review.save();
    await product.save();

    res.redirect(`/products/${req.params.id}`);
})


router.get('/error', (req, res) => {
    res.status(500).render('error');
})


module.exports = router;