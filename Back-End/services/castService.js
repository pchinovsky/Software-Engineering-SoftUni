import Cast from "../models/castModel.js";
import Movie from "../models/movieModel.js";

const getAll = () => Cast.find();

const getAvailable = (movie) => Cast.find(
    // $nin - not in
    { _id: { $nin: movie.casts } }
);

const createCast = (castData) => Cast.create(castData);

const attach = (movieId, castId) => {
    return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
};

// const createCast = async (castData) => {
//     // const cast = await Cast.create(castData);
//     // const movie = await Movie.findById(castData.movieId);
//     // if (movie) {
//     //     movie.cast.push(cast._id);
//     //     await movie.save();
//     // }
//     // console.log('cast - ', cast);

//     // return cast;  

//     await Cast.create(castData);
// };

export default {
    getAll,
    getAvailable,
    createCast,
    attach
}