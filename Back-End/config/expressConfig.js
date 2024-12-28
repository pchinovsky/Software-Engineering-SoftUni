import cookieParser from 'cookie-parser';
import express from 'express';
import { checkAuth } from '../middleware/checkAuth.js';
import { checkOwner } from '../middleware/checkOwner.js';

export default function expressConfig(app) {
    app.use('/static', express.static('static'));
    // for some reason not working - 
    // app.use(express.static('static'));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(checkAuth);
    // app.use(checkOwner);
}