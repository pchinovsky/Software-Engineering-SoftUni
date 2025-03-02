import mongoose from "mongoose";

const movieCastSchema = new mongoose.Schema({
    movie: { type: mongoose.Types.ObjectId, ref: 'Movie', required: true },
    cast: { type: mongoose.Types.ObjectId, ref: 'Cast', required: true },
    characterName: { type: String, required: true }
});

const MovieCast = mongoose.models.MovieCast || mongoose.model('MovieCast', movieCastSchema);

export default MovieCast;