import req from "./request";

const login = async (data) => await req.post('users/login', data, true);

const register = async (data) => await req.post('users/register', data, true);

const logout = async () => await req.get('users/logout');

export default {
    login,
    register,
    logout
}