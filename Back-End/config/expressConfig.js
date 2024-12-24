import express from 'express';

export default function expressConfig(app) {
    app.use('/static', express.static('static'));
    // for some reason not working - 
    // app.use(express.static('static'));
    app.use(express.urlencoded({ extended: false }));
}