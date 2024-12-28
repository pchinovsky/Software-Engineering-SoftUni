import { Router } from 'express';
import movieService from '../services/movieService.js';
import checkAuth from '../middleware/checkAuth.js';
import checkOwner from '../middleware/checkOwner.js';
const router = Router();

router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create', async (req, res) => {
    const movieData = req.body;
    console.log('user - ', req.user);
    movieData.creatorId = req.user._id;

    await movieService.createMovie(movieData);
    res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
    const movieId = req.params.id;
    // const movie = await movieService.getOne(movieId).lean();
    const movie = await movieService.getOne(movieId);
    res.render(`edit`, { movie });
});

router.post('/edit/:id', async (req, res) => {
    const movieId = req.params.id;
    const movieData = req.body;
    await movieService.updateMovie(movieId, movieData);
    res.redirect(`/details/${movieId}`);
});

router.get('/delete/:id', async (req, res) => {
    const movieId = req.params.id;
    await movieService.deleteMovie(movieId);
    res.redirect('/');
});

export default router;