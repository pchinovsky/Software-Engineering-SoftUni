import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, 'Email must be at least 6 characters long'],
        // match: [/[a-zA-Z0-9._%+-]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/, 'Invalid email address format.'],
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email address format.'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        match: [/^[a-zA-Z0-9]{6,}$/, 'Password must contain only alpha numeric characters']
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
        return next(new Error('Passwords do not match.'));
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