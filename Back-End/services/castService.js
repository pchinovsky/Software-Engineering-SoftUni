import Cast from "../models/castModel.js";

const getAll = () => Cast.find();

const createCast = (castData) => Cast.create(castData);

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
    createCast
}