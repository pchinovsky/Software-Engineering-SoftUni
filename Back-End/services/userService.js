import User from "../models/userModel.js";

const createUser = async (userData) => {
    console.log(userData);

    return User.create(userData);
};

const getUserByUsername = async (email) => {
    return User.find(email);
};

export default {
    createUser,
    getUserByUsername
}