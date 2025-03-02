export function requireGuest(req, res, next) {

    if (req.user) {
        res.redirect('/?error=User already logged in');
    } else {
        next();
    }
}

export default requireGuest;