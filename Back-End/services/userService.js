import User from "../models/userModel.js";

const createUser = async (userData) => {
    console.log(userData);

    return User.create(userData);
};

const getUserByEmail = async (email) => {
    return User.findOne({ email });
};

export default {
    createUser,
    getUserByEmail
}