const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

const comments = [
    {
        id:0,
        username: "Sabeel",
        body:"This is a comment"
    },
    {
        id:1,
        username: "Cat",
        body:"Meow Meow Meow"
    },
    {
        id:2,
        username: "Dog",
        body:"Woof Woof Woof"
    },
    {
        id:3,
        username: "Prateek",
        body:"Hello from Google"
    }
]

// List all the comments
app.get('/comments', (req, res) => {
    
    res.render('comments/index', { comments });
})

// Getting a form for adding new comment
app.get('/comments/new', (req, res) => {
    
    res.render('comments/new');
})


// Creates a new comments
app.post('/comments', (req, res) => {
    
    const { username, body } = req.body;

    const id = comments.length;

    comments.push({ username, body,id });

    res.redirect('/comments');
})

// Show particular comment
app.get('/comments/:id', (req, res) => {
   
    const { id } = req.params;

    const foundComment = comments.find(c => c.id===parseInt(id));

    
    res.render('comments/show',{comment:foundComment});
})

app.listen(3000, () => {
    console.log('server runnig at port 3000');
})