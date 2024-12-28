import jwt from 'jsonwebtoken';
import userService from '../services/userService.js';
import { secret } from "../config/constants.js";

export async function checkAuth(req, res, next) {
    const token = req.cookies.auth;
    if (token) {
        try {
            const decoded = jwt.verify(token, secret);
            const user = await userService.getUserByEmail(decoded.email);
            res.locals.isAuthenticated = true;
            req.user = user;
            next();
        } catch (err) {
            res.locals.isAuthenticated = false;
            res.clearCookie('auth');
            res.redirect('/auth/login');
        }
    } else {
        res.locals.isAuthenticated = false;
        next();
    }
}

export default checkAuth;