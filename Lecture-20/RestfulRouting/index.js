const express = require('express');
const app = express();
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

let comments = [
    {
        id:uuid(),
        username: "Sabeel",
        body:"This is a comment"
    },
    {
        id:uuid(),
        username: "Cat",
        body:"Meow Meow Meow"
    },
    {
        id:uuid(),
        username: "Dog",
        body:"Woof Woof Woof"
    },
    {
        id:uuid(),
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
    
    comments.push({ username, body,id:uuid() });
    res.redirect('/comments');
})

// Show particular comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id=== id);
    res.render('comments/show',{comment:foundComment});
})

// Get a form for editing comment

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
    
    res.render('comments/edit', { comment: foundComment });
})


app.patch('/comments/:id', (req, res) => {
    
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);

    const updatedCommentText = req.body.body;
    
    console.log(updatedCommentText);

    foundComment.body = updatedCommentText;

    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    
    const { id } = req.params;

    const temp = comments.filter(c => c.id !== id);

    comments = temp;

    res.redirect('/comments');
})


app.listen(3000, () => {
    console.log('server runnig at port 3000');
})