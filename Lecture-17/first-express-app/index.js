const express = require('express');
const app = express();

// app.use((req,res) => {
//     // res.send("Hello from the server.This is the response for the request that u made")

//     res.send('<h1>THIS IS THE HTTP RESPONSE!!!!</h1>')
// })



// ROUTING

app.get('/', (req, res) => {
    res.send("This is the Root path");
})

app.get('/cats', (req, res) => {
    res.send("<h1>Meowww</h1>")
})

app.post('/cats', (req, res) => {
    res.send('<h3>THIS IS THE POST REQUEST ,THIS IS DIFFERENT FROM GET REQUEST</h3>')
})

app.get('/dogs', (req, res) => {
    res.send("<h1>Woof Wooof</h1>")
})


app.get('*', (req, res) => {
    res.send("THIS IS THE INVALID YOU ARE REQUESTING");
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})