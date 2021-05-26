const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');


// Routes 

const blogRoutes = require('./routes/blog');



mongoose.connect('mongodb://localhost:27017/ng-blog-app',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("DB NOT CONNECTED");
        console.log(err)
    })

app.use(express.json());

// seedDB();

app.use(blogRoutes);


app.listen(8080, () => {
    console.log("Server runnig at port 8080");
})