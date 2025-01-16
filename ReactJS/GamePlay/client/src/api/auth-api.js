import req from "./request";

const login = async (data) => await req.post('users/login', data);

const register = async (data) => await req.post('users/register', data);

export default {
    login,
    register
}