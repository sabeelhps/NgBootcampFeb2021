const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'));


const todos = ["Go to Gym",
    "Learn Web", "Buy Groceries",
    "Go for a walk",
    "ABC",
    "DEF",
    "GHI"
];


const product = {
    img: 'https://images.unsplash.com/photo-1517430868310-0bc91ef7d89a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name:'Laptop',
    price: '200',
    desc:'The general rendering process of Pug is simple. pug.compile() will compile the Pug source code into a JavaScript function that takes a data object (called “locals”) as an argument. Call that resultant function with your data, and voilà!, it will return a string of HTML rendered with your data.'
}


app.get('/', (req, res) => {
   
    res.send("THIS IS THE ROOT ROUTE");
})


app.get('/home', (req, res) => {
    
    res.render('home',{product})
})

app.get('/rand', (req, res) => {
    
    const num = Math.floor(Math.random() * 10 + 1);

    res.render('random',{randomNum:num,todos});
})

app.listen(3000, () => {
    console.log('server started at port 3000');
})