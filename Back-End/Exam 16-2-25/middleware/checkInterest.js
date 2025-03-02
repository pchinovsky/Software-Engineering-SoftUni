export async function checkInterest(req, res, next) {
    if (req.user) {
        const userId = req.user._id;

        try {
            const event = req.event;
            res.locals.isInterested = event.interestedList.some(id => id.equals(userId));
        } catch (err) {
            res.locals.isInterested = false;
        }
    } else {
        res.locals.isInterested = false;
    }
    next();
}

export default checkInterest;