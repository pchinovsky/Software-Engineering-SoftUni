import movieService from '../services/movieService.js';

export async function checkOwner(req, res, next) {
    const movieId = req.params.id;
    const userId = req.user?._id;

    console.log('user - ', req.user);
    console.log('userId - ', userId);

    // avoid checking if no auth
    if (!res.locals.isAuthenticated) next();

    try {
        const movie = await movieService.getOne(movieId);

        // temp until db migration
        if (!movie.creatorId) {
            return res.redirect('/');
        }

        if (movie.creatorId.toString() === userId.toString()) {
            res.locals.isOwner = true;
        } else {
            res.locals.isOwner = false;
        }
        next();
    } catch (err) {
        console.log(err);
    }
}

export default checkOwner;