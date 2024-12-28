import jwt from 'jsonwebtoken';
import userService from '../services/userService.js';

const secret = '0000';

export async function checkAuth(req, res, next) {
    const token = req.cookies.auth;
    if (token) {
        try {
            const decoded = jwt.verify(token, secret);

            const user = await userService.getUserByEmail(decoded.email);
            res.locals.isAuthenticated = true;
            res.locals.username = decoded.email;
            req.user = user;
        } catch (err) {
            res.locals.isAuthenticated = false;
        }
    } else {
        res.locals.isAuthenticated = false;
    }
    next();
}

export default checkAuth;