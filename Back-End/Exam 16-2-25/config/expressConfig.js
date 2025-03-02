import express from 'express';
import cookieParser from 'cookie-parser';
import { checkAuth } from '../middleware/checkAuth.js';

export default function expressConfig(app) {
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(checkAuth);
}