import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true, min: 1900, max: 2022 },
    imageURL: { type: String, required: true, match: /^https?:\/\// },
    rating: { type: Number, required: true },
    description: { type: String, required: true, maxlength: 300 },
    casts: [{ type: mongoose.Types.ObjectId, ref: 'Cast' }]
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
