const express = require('express');
const app = express();



app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('form');
})

app.get('/user', (req, res) => {

    const { username } = req.query;

    res.send(`Hello from ${username}`);
})

app.post('/user', (req, res) => {
    
    console.log(req.body);

    res.send("POST REQUEST");
})




app.listen(3000, () => {
    console.log('server runnig at port 3000');
})