const express = require('express');
const app = express();


app.get('/', (req, res) => {
    
    res.send("THIS IS THE ROOT ROUTE");
})


app.get('/search', (req, res) => {


    res.send("THIS IS A SEARCH PAGE")
})

app.get('/greet', (req, res) => {

    console.log(req.query);
    const { username } = req.query;

    res.send(`Hello from ${username}`)
})

app.get('/hello', (req, res) => {
    res.send('hello');
})




app.listen(3000, () => {
    console.log('server started at port 3000');
})