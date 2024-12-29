import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [5, 'Title must contain at least 5 characters.'],
        match: [/^[a-zA-Z0-9 ]{5,}$/, 'Title must contain only alpha numeric characters.']
    },
    genre: {
        type: String,
        required: true,
        lowercase: true,
        minlength: [5, 'Genre must contain at least 5 characters.'],
        match: [/^[a-zA-Z0-9 ]{5,}$/, 'Genre must contain only alpha numeric characters.']
    },
    director: {
        type: String,
        required: true,
        minlength: [5, 'Director name must contain at least 5 characters.'],
        match: [/^[a-zA-Z0-9 ]{5,}$/, 'Director must contain only alpha numeric characters.']
    },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Movie must not be older than 1900'],
        max: [2024, 'Please enter actual year value']
    },
    imageURL: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Movie image URL must be secured.']
    },
    rating: {
        type: Number,
        required: true,
        min: [1, 'Rating value must be at least 1.'],
        max: [10, 'The maximum possible rating value is 10.']
    },
    description: {
        type: String,
        required: true,
        minlength: [20, 'Description must contain at least 20 characters.'],
        match: [/^[a-zA-Z0-9 ]{20,}$/, 'Description must contain only alpha numeric characters.']
    },
    casts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cast'
    }],
    creatorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});

// cast: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cast' }]

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;


// class Movie {
//     constructor(id, title, genre, director, year, imageURL, rating, description) {
//         this.id = id;
//         this.title = title;
//         this.genre = genre;
//         this.director = director;
//         this.year = year;
//         this.imageURL = imageURL;
//         this.rating = rating;
//         this.description = description;
//     }
// }

// export default Movie;
