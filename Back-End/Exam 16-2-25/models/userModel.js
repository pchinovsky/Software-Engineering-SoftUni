import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required.'],
        unique: true,
        minlength: [2, 'Username must be at least 2 characters long'],
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        minlength: [10, 'Email must be at least 10 characters long'],
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email address format.'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [4, 'Password must be at least 4 characters long'],
    },
    confirmPassword: {
        type: String,
        required: true,
        // excluding from query res - 
        select: false,
    },
});

userSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        return next(new Error('Password inputs do not match.'));
    }

    next();
});

userSchema.pre('save', async function (next) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);

    // ensuring confirmPassword is not stored in db -
    this.confirmPassword = undefined;
    next();
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User; 