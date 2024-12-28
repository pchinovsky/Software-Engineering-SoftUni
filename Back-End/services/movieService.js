import Movie from "../models/movieModel.js";
import mongoose from "mongoose";

// could unite with the search fn - 
const getAll = () => Movie.find();

// const getOne = (id) => Movie.findById(id).populate('casts');

// controlled population - only include characters for this movie
// simplifies templ display
const getOne = (id) => {
    return Movie.findById(id)
        .populate({
            path: 'casts',
            populate: {
                path: 'characters',
                match: { movie: new mongoose.Types.ObjectId(id) },
                select: 'characterName movie',
            },
        })
        .lean();
};



// const getOne = (id) => {
//     Movie.findById(id)
//         .then(movie => {
//             movie.stars = Math.floor(movie.rating / 2);
//             movie.casts = movie.casts.map(c => c.name).join(', ');
//             return movie;
//         });

// };


// const getOne = async (id) => {
//     const movies = await getAll();
//     const movie = movies.find(m => m.id === id);
//     movie.stars = Math.floor(movie.rating / 2);
//     return movie;
// };

const createMovie = async (movie) => {
    return await Movie.create(movie);
};

const updateMovie = async (id, movie) => {
    return await Movie.findByIdAndUpdate(id, movie);
};

const deleteMovie = async (id) => {
    return await Movie.findByIdAndDelete(id);
};

const search = async (query) => {
    // let movies = await getAll().lean();
    // console.log('movies - ', movies);
    // console.log('query - ', query);

    // let filteredMovies = movies.filter(m => {
    //     // match - cond to check if each movie is returned
    //     // if more than one query is entered, and movie matches one, but not the other, won't be returned
    //     let match = true;

    //     if (query.title) {
    //         // match = match && m.title.toLowerCase().includes(query.title.toLowerCase());
    //         filter.title = query.title.toLowerCase();
    //     }

    //     if (query.genre) {
    //         // match = match && m.genre.toLowerCase().includes(query.genre.toLowerCase());
    //         // match = match && m.where('genre').equals(query.genre.toLowerCase());
    //         filter.genre = query.genre.toLowerCase();
    //     }
    //     if (query.year) {
    //         // match = match && m.year.toString() === query.year.toString();
    //         match = match && m.where('year').equals(query.year);
    //     }
    //     return match;
    // });

    // console.log('filtered movies - ', filteredMovies);


    // if (query.title || query.genre || query.year) {
    //     movies = filteredMovies;
    // }

    let filter = {};

    if (query.title) {
        filter.title = { $regex: query.title, $options: 'i' };
    }
    if (query.genre) {
        filter.genre = query.genre.toLowerCase();
    }
    if (query.year) {
        filter.year = query.year;
    }

    const movies = await Movie.find(filter).lean();
    return movies;
};

export default {
    getAll,
    getOne,
    createMovie,
    updateMovie,
    deleteMovie,
    search
}