import { Router } from 'express';
import movieService from '../services/movieService.js';
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

// details route not working - 
router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id - ', id);

    const movie = await movieService.getOne(id).lean();
    console.log(movie);


    res.render('details', { movie });
});

router.get('/search', async (req, res) => {
    console.log('search query - ', req.query);

    const query = req.query;
    // const movies = await movieService.getAll();
    const movies = await movieService.search(query).lean();

    res.render('search', { movies, query });
});

// router.post('/search', async (req, res) => {
//     const query = req.body;
//     const movies = await movieService.search(query);
//     console.log(query);

//     res.render('search', { movies });
// });

export default router;