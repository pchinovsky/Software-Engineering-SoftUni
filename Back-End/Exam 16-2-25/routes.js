import { Router } from "express";

const routes = Router();

import homeController from './controllers/home-controller.js';
import authController from './controllers/auth-controller.js';
import eventsController from './controllers/events-controller.js';

routes.use(homeController);
routes.use('/auth', authController);
routes.use('/events', eventsController);

routes.all('*', (req, res) => {
    res.status(404).render('404');
});

export default routes;