import jwt from 'jsonwebtoken';
import authService from '../services/authService.js';

export async function checkAuth(req, res, next) {
    const token = req.cookies.auth;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await authService.getUserByEmail(decoded.email);
            res.locals.isAuthenticated = true;
            res.locals.user = user;
            req.user = user;
            next();
        } catch (err) {
            res.locals.isAuthenticated = false;
            res.locals.user = null;
            res.clearCookie('auth');
            res.redirect('/auth/login');
        }
    } else {
        res.locals.isAuthenticated = false;
        res.locals.user = null;
        next();
    }
}

export default checkAuth;