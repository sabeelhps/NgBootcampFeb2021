const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    
    user: {
        type: String,
        required:true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
})

const Review = mongoose.model('Review',reviewSchema);

module.exports = Review;