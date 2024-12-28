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