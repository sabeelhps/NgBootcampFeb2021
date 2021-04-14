const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.use('/',express.static(path.join(__dirname, 'public')));


const todos = ["Go to Gym", "Watch Movies", "Learn Web", "Go for a Walk"];

app.get('/todo', (req, res) => {

    if (req.xhr) {
        console.log("AJAX REQUEST");

        res.send(todos);
    } else {
        console.log("SSR");
        res.render("home", { todos });
    }
})


app.listen(3000, () => {
    console.log("Server running on port 3000");
})