const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open!!");
    })
    .catch(err => {
        console.log("Connection Failed");
        console.log(err);
    });


// const moviesSchema = new mongoose.Schema({
//     name: String,
//     year: Number,
//     score: Number,
//     isWatched: Boolean
// })

const moviesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength:30
    },
    year: {
        type:Number
    },
    score: {
        type: Number,
        min: 0,
        max:10
    },
    isWatched: {
        type: Boolean,
        default:false
    }
})


const Movie = mongoose.model('Movie', moviesSchema);

const ironman=new Movie({year: 2010, score: 7 });


ironman.save()
    .then(m => {
        console.log(m);
    })
    .catch(err => {
        console.log("OH No error");
        console.log(err);
    });




// const superman=new Movie({ name: 'Superman', year: 2015, score: 8, isWatched: true });


// Movie.insertMany([
//     { name: "Star wars", year: 2008, score: 9, isWatched: true },
//     { name: "Spiderman", year: 2012, score: 7, isWatched: false },
//     { name: "Guardian of Galaxy", year: 2010, score: 7, isWatched: false },
//     { name: "Dr.Strange", year: 2011, score: 6.5, isWatched: true },
// ])
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });






