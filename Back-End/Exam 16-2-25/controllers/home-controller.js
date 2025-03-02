import { Router } from "express";
import eventService from "../services/eventService.js";
import { extractErrorMsg } from "../utils/extractErrorMsg.js";

const router = Router();


router.get('/', (req, res) => {
    const error = req.query.error ? req.query.error : undefined;
    res.render('home', { title: 'Home Page', error });
});

router.get('/events', async (req, res) => {
    const error = req.query.error ? req.query.error : undefined;

    try {
        const events = await eventService.getAll().lean();
        res.render('catalog', { events, title: 'Catalog Page', error });
    } catch (err) {
        const error = extractErrorMsg(err);
        res.render('catalog', { events: [], error, title: 'Catalog Page' });
    }
});

router.get('/search', async (req, res) => {
    const query = req.query;

    let events;
    try {
        events = await eventService.search(query);
        res.render('search', { events, query, title: 'Search Page' });
    } catch (err) {
        const error = extractErrorMsg(err);
        res.render('search', { events: [], query, error, title: 'Search Page' });
    }
});

export default router;