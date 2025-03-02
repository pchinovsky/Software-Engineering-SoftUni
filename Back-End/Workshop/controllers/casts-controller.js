import { Router } from 'express';
import castService from '../services/castService.js';
import movieService from '../services/movieService.js';
import requireAuth from '../middleware/requireAuth.js';
import { extractErrorMsg } from '../utils/extractErrorMsg.js';
const router = Router();

router.get('/create', (req, res) => {
    res.render('casts/create');
});

router.post('/create', requireAuth, async (req, res) => {
    const castData = req.body;

    try {
        await castService.createCast(castData);
        res.redirect('/');
    } catch (err) {
        const error = extractErrorMsg(err);
        return res.render('casts/create', { error, cast: castData });
    }
});

router.get('/attach/:id', async (req, res) => {
    const id = req.params.id;

    let movie;
    try {
        movie = await movieService.getOne(id).lean();

    } catch (err) {
        const error = extractErrorMsg(err);
        return res.render('casts/attach', { error });
    }

    let casts;
    try {
        // const casts = await castService.getAll().lean();
        casts = await castService.getAvailable(movie).lean();
    } catch (err) {
        const error = extractErrorMsg(err);
        return res.render('casts/attach', { error });
    }

    res.render('casts/attach', { movie, casts });
});

router.post('/attach/:id', async (req, res) => {
    const movieId = req.params.id;
    // const castId = req.body.cast;

    const character = req.body.character;
    const castId = req.body.cast;

    // console.log('castId - ', castId);
    // console.log('character - ', character);

    try {
        await castService.attach(movieId, castId, character);
        res.redirect(`/details/${movieId}`);
    } catch (err) {
        const error = extractErrorMsg(err);
        return res.render('casts/attach', { error });
    }

});

export default router;