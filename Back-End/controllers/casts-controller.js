import { Router } from 'express';
import castService from '../services/castService.js';
import movieService from '../services/movieService.js';
const router = Router();

router.get('/create', (req, res) => {
    res.render('casts/create');
});

router.get('/attach/:id', async (req, res) => {
    const id = req.params.id;
    const movie = await movieService.getOne(id).lean();
    const casts = await castService.getAll().lean();

    res.render('casts/attach', { movie, casts });
});

router.post('/create', async (req, res) => {
    const castData = req.body;
    await castService.createCast(castData);
    res.redirect(`/`);
});

export default router;