const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));



const arr = ["ABC", "DEF", "GHI", "JKL"];

app.get('/r/:subredit', (req, res) => {

    const { subredit } = req.params;

    res.render('home', { subredit: subredit,arr });
})



app.listen(8080, () => {
    console.log("server running at port 8080");
})