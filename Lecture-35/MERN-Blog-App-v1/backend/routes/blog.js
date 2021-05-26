const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');


router.get('/blogs', async(req, res) => {
    const blogs=await Blog.find({});
    res.send(blogs);
})




module.exports = router;

