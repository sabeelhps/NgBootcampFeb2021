const express = require('express');
const app = express();
const session = require('express-session');


app.use(session({
    secret:'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: true,
}))


app.get('/viewcount',(req,res)=>{

    if(req.session.pagecount){
        req.session.pagecount+=1;
    }else{
        req.session.pagecount=1;
    }

    res.send(`You viewed this page ${req.session.pagecount} times`);
})

app.get('/register',(req,res)=>{

    const {username} = req.query;

    req.session.username=username;

    res.redirect('/greet');
})

app.get('/greet',(req,res)=>{

    const {username='Anonymous'} = req.session;

    res.send(`Hello From ${username}`);
})


app.get('/',(req,res)=>{
    res.send("It Worked!!");
})


app.listen(3000, () => {
    console.log("Server running at port 3000");
})