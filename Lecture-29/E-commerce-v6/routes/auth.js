const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');



// router.get('/fakeUser', async (req, res) => {

//     const user = new User({ email: 'sabeel@gmail.com',username:'sabeel' });
//     const newUser = await User.register(user, 'sabeel12');
//     res.send(newUser);
// })


// Get the signup form
router.get('/register', async (req, res) => {
    res.render('auth/signup');
})

router.post('/register', async (req, res) => {
    
    try {
        const user = new User({ username: req.body.username, email: req.body.email });
        const newUser = await User.register(user, req.body.password);
        req.flash('success', 'Registered Successfully,Please Login to Continue');
        res.redirect('/login');
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/register')
    }
});


// Get the login form
router.get('/login', async (req, res) => {
    
    res.render('auth/login')
})

router.post('/login',
    passport.authenticate('local',
        {
            failureRedirect: '/login',
            failureFlash: true
        }
    ), (req, res) => {
        req.flash('success', `Welcome Back!! ${req.user.username}`)
        res.redirect('/products');
});

// Logout the user from the current session
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Logged Out Successfully');
    res.redirect('/login');
})


module.exports = router;