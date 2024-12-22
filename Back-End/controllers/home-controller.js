import express from 'express';
import { Router } from 'express';
import movieService from '../services/movieService.js';
const router = Router();

router.get('/', async (req, res) => {
    // no need to specify layout as default is main
    const movies = await movieService.getAll();
    // console.log(movies);

    res.render('home', { movies });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/details/:id', async (req, res) => {
    const id = Number(req.params.id);
    const movie = await movieService.getOne(id);
    console.log(movie);


    res.render('details', { movie });
});

router.get('/search', async (req, res) => {
    const movies = await movieService.getAll();

    res.render('search', { movies });
});

router.post('/search', async (req, res) => {
    const query = req.body;
    const movies = await movieService.search(query);
    console.log(query);

    res.render('search', { movies });
});

export default router;