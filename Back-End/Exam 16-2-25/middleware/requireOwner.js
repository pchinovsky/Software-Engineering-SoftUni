
import eventService from "../services/eventService.js";
import { extractErrorMsg } from "../utils/extractErrorMsg.js";

export async function requireOwner(req, res, next) {
    const eventId = req.params.id;
    const userId = req.user?._id;

    try {
        const event = await eventService.getOne(eventId).lean();
        req.event = event;

        if (event.owner.toString() === userId.toString()) {
            next();
        } else {
            const error = 'Unauthorized access';
            res.redirect(`/events/details/${eventId}?error=${error}`);
        }
    } catch (err) {
        const error = extractErrorMsg(err);
        res.redirect(`/?error=${encodeURIComponent(error)}`);
    }
}

export default requireOwner;