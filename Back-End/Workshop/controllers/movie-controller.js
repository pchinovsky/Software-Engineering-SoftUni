import { Router } from 'express';
import movieService from '../services/movieService.js';
import checkAuth from '../middleware/checkAuth.js';
import checkOwner from '../middleware/checkOwner.js';
import requireAuth from '../middleware/requireAuth.js';
import { extractErrorMsg } from '../utils/extractErrorMsg.js';
const router = Router();

router.get('/create', requireAuth, (req, res) => {
    res.render('movies/create');
});

router.post('/create', requireAuth, async (req, res) => {
    const movieData = req.body;
    console.log('user - ', req.user);
    movieData.creatorId = req.user._id;

    try {
        await movieService.createMovie(movieData);
        res.redirect('/');
    } catch (err) {
        // const error = Object.values(err.errors)[0]?.message;
        const error = extractErrorMsg(err);
        return res.render('movies/create', { error, movie: movieData });
    }
});

router.get('/edit/:id', async (req, res) => {
    const movieId = req.params.id;

    let movie;
    try {
        // const movie = await movieService.getOne(movieId).lean();
        movie = await movieService.getOne(movieId);
        res.render(`edit`, { movie });
    } catch (err) {
        // const error = Object.values(err.errors)[0]?.message;
        const error = extractErrorMsg(err);
        res.locals.error = error;
        res.redirect(`/details/${movieId}`);
    }
});

router.post('/edit/:id', async (req, res) => {
    const movieId = req.params.id;
    const movieData = req.body;

    try {
        await movieService.updateMovie(movieId, movieData);
        res.redirect(`/details/${movieId}`);
    } catch (err) {
        // const error = Object.values(err.errors)[0]?.message;
        const error = extractErrorMsg(err);
        return res.render('edit', { error, movie: movieData });
    }

});

router.get('/delete/:id', async (req, res) => {
    const movieId = req.params.id;
    const movie = await movieService.getOne(movieId);

    if (movie.creatorId !== req.user._id) {
        res.locals.error = 'Unauthorized deletion';
        res.redirect(`/details/${movieId}`);
    }

    try {
        await movieService.deleteMovie(movieId);
        res.redirect('/');
    } catch (err) {
        // const error = Object.values(err.errors)[0]?.message;
        const error = extractErrorMsg(err);
        res.locals.error = error;
        res.redirect(`/details/${movieId}`);
    }

});

export default router;