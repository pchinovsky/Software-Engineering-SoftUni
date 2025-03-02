import mongoose from "mongoose";

const disasterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        minlength: [2, 'Name must be at least 2 characters long.'],
    },
    type: {
        type: String,
        required: [true, 'Event type is required.'],
        enum: ["Wildfire", "Flood", "Earthquake", "Hurricane", "Drought", "Tsunami", "Other"],
        message: 'Type of event must be one of the specified options.'
    },
    year: {
        type: [Number, 'Year must be a number.'],
        required: [true, 'Year is required.'],
        min: [0, 'Year must be a positive number.'],
        max: [2024, 'Year must be earlier than 2024.'],
    },
    location: {
        type: String,
        required: [true, 'Location is required.'],
        minlength: [3, 'Location must be at least 3 characters long.'],
    },
    image: {
        type: String,
        required: [true, 'Event image URL is required.'],
        match: [/^https?:\/\//, 'Event image URL must start with http or https.']
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minlength: [10, 'Description must contain at least 10 characters.'],
    },
    interestedList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});


const Disaster = mongoose.model('Disaster', disasterSchema);

// const Disaster = mongoose.models.Disaster || mongoose.model('Disaster', disasterSchema);

export default Disaster;