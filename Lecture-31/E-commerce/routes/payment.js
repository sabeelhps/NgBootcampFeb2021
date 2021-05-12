const express = require('express');
const router = express.Router();
const request = require('request');
const jsSHA = require('jssha');
const uniqid = require('uniqid');
const { isLoggedIn } = require('../middleware');
const User = require('../models/user');
const Order = require('../models/order');


router.post('/payment_gateway/payumoney',isLoggedIn, (req, res) => {
    req.body.txnid = uniqid.process()
    req.body.email = req.user.email;
    req.body.firstname = req.user.username;
    //Here save all the details in pay object 
    const pay = req.body;
    const hashString = process.env.MERCHANT_KEY //store in in different file
     + '|' + pay.txnid
     + '|' + pay.amount 
     + '|' + pay.productinfo 
     + '|' + pay.firstname 
     + '|' + pay.email 
     + '|' + '||||||||||'
     + process.env.MERCHANT_SALT //store in in different file
    
    
    const sha = new jsSHA('SHA-512', "TEXT");
    sha.update(hashString);
    //Getting hashed value from sha module
     const hash = sha.getHash("HEX");
     
     //We have to additionally pass merchant key to API
    
     pay.key = process.env.MERCHANT_KEY //store in in different file;
     pay.surl = 'http://localhost:3000/payment/success';
     pay.furl = 'http://localhost:3000/payment/fail';
     pay.hash = hash;
    //Making an HTTP/HTTPS call with request
    request.post({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: 'https://sandboxsecure.payu.in/_payment', //Testing url
        form: pay
     }, function (error, httpRes, body) {
        if (error) 
            res.send(
                {
                    status: false,
                    message:error.toString()
            }
     );
     if (httpRes.statusCode === 200) {
        res.send(body);
     } else if (httpRes.statusCode >= 300 && 
            httpRes.statusCode <= 400) {
            res.redirect(httpRes.headers.location.toString());
     }
     })
});
    

router.post('/payment/success',isLoggedIn, async(req, res) => {
    //Payumoney will send Success Transaction data to req body. 
    //  Based on the response Implement UI as per you want
    
    try {
        const order= {
            txnid: req.body.txnid,
            amount: req.body.amount,
            orderedProducts:req.user.cart
        }
    
        const placedOrder=await Order.create(order);
    
        req.user.orders.push(placedOrder);
    
        await req.user.save();
    
        req.flash('success','Your Order has been Successfully Placed.Thanks for Shopping with us!')
        res.redirect(`/user/${req.user._id}/me`);
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot Place the Order at this moment.Please try again later!');
        res.render('error');
    } 
})

router.post('/payment/fail',isLoggedIn, (req, res) => {
    //Payumoney will send Fail Transaction data to req body. 
    //  Based on the response Implement UI as per you want
    req.flash('error', `Your Payment Failed.Try again after sometime ${req.body}`);
    res.render('error');
})



module.exports = router;
