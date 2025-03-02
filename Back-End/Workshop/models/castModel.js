import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    characterName: {
        type: String,
        required: true,
        minlength: [5, 'Character name must contain at least 5 characters.'],
        match: [/^[a-zA-Z0-9 ]{5,}$/, 'Character name must contain at least 5 characters.']
    },
    _id: false,
});

characterSchema.virtual('movieStr').get(function () {
    return this.movie.toString();
});

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [5, 'Name must contain at least 5 characters.'],
        match: [/^[a-zA-Z0-9 ]{5,}$/, 'Name must contain only alpha numeric characters.']
    },
    age: {
        type: Number,
        required: true,
        min: [1, 'Age value must be at least 1.'],
        max: [120, 'Age value could not be higher than 120.']
    },
    born: {
        type: String,
        required: true,
        minlength: [10, 'Country of origin must contain at least 10 characters.'],
        match: [/^[a-zA-Z0-9 ]{10,}$/, 'Country of origin must contain only alpha numeric characters.']
    },
    castImage: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Cast image URL must be secured.']
    },
    characters: [characterSchema],
});

// movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }




// const Cast = mongoose.model('Movie', castSchema);

// fixed the  Cannot overwrite `Movie` model once compiled error - checking if model is defined - 
const Cast = mongoose.models.Cast || mongoose.model('Cast', castSchema);

export default Cast;
