import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
    movie: { type: mongoose.Types.ObjectId, ref: 'Movie', required: true },
    characterName: { type: String, required: true }
});

const castSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 0, max: 120 },
    born: { type: String, required: true },
    castImage: { type: String, required: true, match: /^https?:\/\// },
    characters: [characterSchema],
});

// movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }




// const Cast = mongoose.model('Movie', castSchema);

// fixed the  Cannot overwrite `Movie` model once compiled error - 
const Cast = mongoose.models.Cast || mongoose.model('Cast', castSchema);

export default Cast;
