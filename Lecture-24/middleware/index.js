const express = require('express');
const app = express();


// app.use((req, res,next) => {
//     req.name = "Sabeel";
//     console.log("My First Middle ware");
//     next();
//     console.log("This is first middleware after calling NEXT()")
// })

// app.use((req, res,next) => {
//     req.name = "Sabeel";
//     console.log("My Second Middle ware");
//     next();
//     console.log("This is my second middle ware after next()")
// })


const verify = (req,res,next) => {
    
    const { password } = req.query;

    if (password === 'orange') {
        next();
    }
    res.send("INVALID PASSWORD!!!!!");
}


app.use('/cats',(req, res, next) => {
    console.log("This is the middleware at path /cats")
    next();
})

app.get('/', (req, res) => {
 
    res.send("THIS IS THE HOME PAGE");
})

app.get('/dogs',verify,(req, res) => {
    res.send("WOOF WOOOF");
})


app.get('/secret',verify,(req, res) => {
    
    res.send("MY SECRET IS : SOMETIME I PUT THE HEADPHONES SO THAT I DONT HAVE TO TALK TO ANYONE");
})



app.listen(3000, () => {
    console.log("Server running at port 3000");
})