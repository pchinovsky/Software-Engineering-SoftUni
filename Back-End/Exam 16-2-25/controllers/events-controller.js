import { Router } from "express";
import eventService from "../services/eventService.js";
import { checkOwner } from "../middleware/checkOwner.js";
import { requireAuth } from "../middleware/requireAuth.js";
import requireOwner from "../middleware/requireOwner.js";
import requireNonOwner from "../middleware/requireNonOwner.js";
import checkInterest from "../middleware/checkInterest.js";
import { extractErrorMsg } from "../utils/extractErrorMsg.js";


const router = Router();

router.get('/create', requireAuth, (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', requireAuth, async (req, res) => {
    let eventData = req.body;
    eventData.year = Number(eventData.year);
    eventData.owner = req.user._id;

    try {
        await eventService.create(eventData);
        res.redirect('/events');
    } catch (err) {
        const error = extractErrorMsg(err);
        return res.render('create', { error, event: eventData, title: 'Create Page' });
    }
});

router.get('/details/:id', checkOwner, checkInterest, async (req, res) => {
    const error = req.query.error ? req.query.error : undefined;
    const id = req.params.id;

    let event;
    try {
        event = await eventService.getOne(id).lean();
    } catch (err) {
        const error = extractErrorMsg(err);
        res.redirect(`/events?error=${encodeURIComponent(error)}`);
    }

    res.render('details', { event, title: 'Details Page', error });
});

router.get('/edit/:id', requireAuth, requireOwner, async (req, res) => {
    const eventId = req.params.id;

    let event;
    try {
        event = req.event;
        res.render(`edit`, { event, title: 'Edit Page' });
    } catch (err) {
        const error = extractErrorMsg(err);
        res.redirect(`/events/details/${eventId}?error=${encodeURIComponent(error)}`);
    }
});

router.post('/edit/:id', requireAuth, requireOwner, async (req, res) => {
    const eventId = req.params.id;
    const eventData = req.body;

    try {
        await eventService.update(eventId, eventData);
        res.redirect(`/events/details/${eventId}`);
    } catch (err) {
        const error = extractErrorMsg(err);
        return res.render('edit', { error, event: eventData });
    }
});

router.get('/delete/:id', requireAuth, requireOwner, async (req, res) => {
    const eventId = req.params.id;

    try {
        await eventService.remove(eventId);
        res.redirect('/events');
    } catch (err) {
        const error = extractErrorMsg(err);
        res.redirect(`/events/details/${eventId}?error=${encodeURIComponent(error)}`);
    }
});

router.get('/interest/:id', requireAuth, requireNonOwner, async (req, res) => {
    const eventId = req.params.id;
    const userId = req.user._id;

    let event;
    try {
        await eventService.interest(eventId, userId);
        event = req.event;
        res.redirect(`/events/details/${eventId}`);
    } catch (err) {
        const error = extractErrorMsg(err);
        res.render('details', { event, error, title: 'Details Page' });
    }
});

export default router;