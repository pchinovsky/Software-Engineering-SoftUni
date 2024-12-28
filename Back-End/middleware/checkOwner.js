import movieService from '../services/movieService.js';

export async function checkOwner(req, res, next) {
    const movieId = req.params.id;
    const userId = req.user._id;

    try {
        const movie = await movieService.getOne(movieId);

        if (!movie.creatorId) {
            return res.redirect('/');
        }

        if (movie.creatorId.toString() === userId.toString()) {
            res.locals.isOwner = true;
            next();
        } else {
            res.locals.isOwner = false;
        }
    } catch (err) {
        console.log(err);
    }
}

export default checkOwner;