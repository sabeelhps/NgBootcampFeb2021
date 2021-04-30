const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser());

app.get('/greet', (req, res) => {
    
    console.log(req.cookies);

    const { name = 'Anonymous' } = req.cookies;

    res.send(`Hey There!! ${name}`);
})

app.get('/setname', (req, res) => {
    
    res.cookie('name', 'Sabeel Khan');
    res.cookie('mode', 'Dark');
    res.send("SENT U A COOKIE SUCCESSFULLY!!");
})


app.listen(3000, () => {
    console.log("Server running at port 3000");
})