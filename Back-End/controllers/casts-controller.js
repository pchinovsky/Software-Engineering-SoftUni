import { Router } from 'express';
import castService from '../services/castService.js';
import movieService from '../services/movieService.js';
const router = Router();

router.get('/create', (req, res) => {
    res.render('casts/create');
});

router.post('/create', async (req, res) => {
    const castData = req.body;
    await castService.createCast(castData);
    res.redirect(`/`);
});

router.get('/attach/:id', async (req, res) => {
    const id = req.params.id;
    const movie = await movieService.getOne(id).lean();
    // const casts = await castService.getAll().lean();
    const casts = await castService.getAvailable(movie).lean();

    res.render('casts/attach', { movie, casts });
});

router.post('/attach/:id', async (req, res) => {
    const movieId = req.params.id;
    // const castId = req.body.cast;

    const character = req.body.character;
    const castId = req.body.cast;

    console.log('castId - ', castId);
    console.log('character - ', character);



    await castService.attach(movieId, castId, character);

    res.redirect(`/details/${movieId}`);
});

export default router;