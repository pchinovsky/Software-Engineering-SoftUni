import jwt from 'jsonwebtoken';

const secret = '0000';

export function checkAuth(req, res, next) {
    const token = req.cookies.auth;
    if (token) {
        try {
            const decoded = jwt.verify(token, secret);
            res.locals.isAuthenticated = true;
            res.locals.username = decoded.username;
        } catch (err) {
            res.locals.isAuthenticated = false;
        }
    } else {
        res.locals.isAuthenticated = false;
    }
    next();
}