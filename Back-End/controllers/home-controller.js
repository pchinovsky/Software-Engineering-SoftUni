import { Router } from 'express';
import movieService from '../services/movieService.js';
import castService from '../services/castService.js';
import checkOwner from '../middleware/checkOwner.js';
import mongoose from 'mongoose';
const router = Router();

router.get('/', async (req, res) => {
    // no need to specify layout as default is main
    const movies = await movieService.getAll().lean();
    // console.log(movies);

    res.render('home', { movies });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/details/:id', checkOwner, async (req, res) => {
    const id = req.params.id;
    // console.log('id - ', id);

    // const objectId = new mongoose.Types.ObjectId(id);

    const movie = await movieService.getOne(id);
    console.log('movie - ', movie);
    console.log('movie.casts - ', JSON.stringify(movie.casts, null, 2));

    // manual character name filtering (removing .lean from the getOne call)
    // all attempts to match cast movie id to movie id by objId - str conversions in the service fail
    movie.casts.forEach(cast => {
        cast.characters = cast.characters.filter(character =>
            character.movie.toString() === id.toString()
        );
    });

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
    const movies = await movieService.search(query);

    res.render('search', { movies, query });
});

// router.post('/search', async (req, res) => {
//     const query = req.body;
//     const movies = await movieService.search(query);
//     console.log(query);

//     res.render('search', { movies });
// });

export default router;