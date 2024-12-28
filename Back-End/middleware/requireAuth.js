export function requireAuth(req, res, next) {
    console.log('req.user - ', req.user);

    if (req.user) {
        next();
    } else {
        res.redirect('/auth/login');
    }
}

export default requireAuth;