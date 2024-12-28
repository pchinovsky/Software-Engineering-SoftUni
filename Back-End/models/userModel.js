import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: [6, 'Password must be at least 6 characters long'] },
});

userSchema.pre('save', async function (next) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);

    next();
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User; 