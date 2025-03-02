import { Router } from 'express';
import movieService from '../services/movieService.js';
import castService from '../services/castService.js';
import checkOwner from '../middleware/checkOwner.js';
import mongoose from 'mongoose';
import { extractErrorMsg } from '../utils/extractErrorMsg.js';
const router = Router();

router.get('/', async (req, res) => {

    try {
        const movies = await movieService.getAll().lean();
        res.render('home', { movies });
    } catch (err) {
        const error = extractErrorMsg(err);
        return res.render('home', { error });
    }

});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/details/:id', checkOwner, async (req, res) => {
    const id = req.params.id;
    // console.log('id - ', id);

    // const objectId = new mongoose.Types.ObjectId(id);

    let movie;
    try {
        movie = await movieService.getOne(id);
        // manual character name filtering (removing .lean from the getOne call)
        // all attempts to match cast movie id to movie id by objId - str conversions in the service fail
        movie.casts.forEach(cast => {
            cast.characters = cast.characters.filter(character =>
                character.movie.toString() === id.toString()
            );
        });
    } catch (err) {
        const error = extractErrorMsg(err);
        res.render('details', { movie, error });
    }

    // direct casts access without .populate();
    const castsAll = await castService.getAll().lean();
    // const movieCasts = movie.casts?.map(castId => castsAll.find(cast => cast._id.toString() === castId.toString()));

    // res.render('details', { movie, movieCasts });
    res.render('details', { movie });
});

router.get('/search', async (req, res) => {
    console.log('search query - ', req.query);

    const query = req.query;
    // const movies = await movieService.getAll();

    let movies;
    try {
        movies = await movieService.search(query);
        res.render('search', { movies, query });
    } catch (err) {
        const error = extractErrorMsg(err);
        res.render('search', { movies, query, error });
    }

});

export default router;