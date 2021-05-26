const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    author: {
        type: String,
        required:true
    },
    img:{
        type: String,   
    },
    content: {
        type:String,
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;