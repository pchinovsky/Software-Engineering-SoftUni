import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createUser = async (userData) => {
    // const user = await getUserByEmail(email);
    const userCount = await User.countDocuments({ email: userData.email });
    if (userCount > 0) {
        throw new Error('User already exists');
    }
    return User.create(userData);
};

const authenticateUser = async (email, password) => {

    const user = await getUserByEmail(email);

    if (!user) {
        throw new Error('No such user exists');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid password');
    }

    const payload = { email: user.email, id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
}

const getUserByEmail = async (email) => {
    return User.findOne({ email });
};

export default {
    createUser,
    getUserByEmail,
    authenticateUser
}