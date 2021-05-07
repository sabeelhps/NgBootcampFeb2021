const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db');
const Blog = require('./models/blog');
const methodOverride = require('method-override');



// CONNECTING TO THE DATABASE
connectDB();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send("Connected");
});


// display all blogs
app.get('/blogs', async(req, res) => {

    const blogs=await Blog.findAll();

    res.render('index', { blogs });
})


// get the new blog form
app.get('/blogs/new', (req, res) => {
    res.render('new');
})


// create new blog
app.post('/blogs', async(req, res) => {
    
    const blog=await Blog.create(req.body);

    res.redirect('/blogs');
})

// show a particular blog

app.get('/blogs/:id', async (req, res) => {
    
    const blog=await Blog.findOne({
        where: {
            id:req.params.id
        }
    })

    res.render('show',{blog});
})


app.get('/blogs/:id/edit', async(req, res) => {

    const blog = await Blog.findOne({
        where: {
            id:req.params.id
        }
    })


    res.render('edit',{blog});
})

app.patch('/blogs/:id', async(req, res) => {

    await Blog.update(req.body, {
        where: {
            id:req.params.id
        }
    })
    res.redirect(`/blogs/${req.params.id}`);
})

app.delete('/blogs/:id', async(req, res) => {
    
    await Blog.destroy({
        where: {
            id:req.params.id
        }
    })

    res.redirect('/blogs');
})


app.listen(8080, () => {
    console.log('Server Running at Port 8080');
})