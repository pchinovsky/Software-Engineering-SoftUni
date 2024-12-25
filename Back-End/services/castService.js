import Cast from "../models/castModel.js";
import Movie from "../models/movieModel.js";

const getAll = () => Cast.find();

const getAvailable = (movie) => Cast.find(
    // $nin - not in
    { _id: { $nin: movie.casts } }
);

const getCharacter = async (movieId, castId) => {
    const cast = await Cast.findById(castId);
    if (cast) {
        const character = cast.characters.find(char => char.movie.toString() === movieId.toString());
        return character ? character.characterName : null;
    }
    return null;
};

const createCast = (castData) => Cast.create(castData);

// const attach = (movieId, castId) => {
//     return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
// };
const attach = async (movieId, castId, character) => {
    const cast = await Cast.findById(castId);
    // console.log('cast - ', cast);
    // console.log('castId - ', castId);

    if (cast) {
        // console.log('cast - ', cast);

        cast.characters.push({ movie: movieId, characterName: character });
        await cast.save();
    }
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
    getCharacter,
    createCast,
    attach
}