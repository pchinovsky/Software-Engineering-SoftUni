import eventService from "../services/eventService.js";

export async function checkOwner(req, res, next) {
    const eventId = req.params.id;
    const userId = req.user?._id;

    try {
        const event = await eventService.getOne(eventId);
        req.event = event;

        if (event.owner.equals(userId)) {
            res.locals.isOwner = true;
        } else {
            res.locals.isOwner = false;
        }

        next();
    } catch (err) {
        res.locals.isOwner = false;
        next();
    }
}

export default checkOwner;