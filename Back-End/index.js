// const express = require("express");
// const handlebars = requre('express-handlebars');
// const path = require("path");

import express from 'express';
import handlebars from 'express-handlebars';
import Handlebars from "handlebars";
import path from "path";
import { fileURLToPath } from 'url';
import Movie from './movieModel.js';
import fs from 'fs/promises';
// import fs from 'fs';

// import homeController from './controllers/home-controller.js';
import routes from "./routes.js";

const app = express();
const port = 3000;

// needed as __dirname not supported in ESM (later found dirname not needed)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        renderStars: function (stars) {
            let starHtml = '';
            starHtml += '&#x2605;'.repeat(stars);
            // return parsed html - 
            return new Handlebars.SafeString(starHtml);
        }
    }
}));
// app.get('/', (req, res) => {
//     // no need to specify layout as default is main
//     const movies = [];
//     res.render('home', { movies });
// });

// app.get('/about', (req, res) => {
//     res.render('about');
// });

// app.get('/create', (req, res) => {
//     res.render('create');
// });
// app.get('/details/:id', (req, res) => {
//     const id = req.params.id;
//     // import movies db
//     const movie = movies.find(m => m.id === id);

//     res.render('details', { movie });
// });

// app.get('/search', (req, res) => {
//     res.render('search');
// });

// app.get('*', (req, res) => {
//     res.status(404).render('404');
// });

app.set('view engine', 'hbs');
// - needed to allow static files like css and imgs to load
// app.use('/static', express.static(path.join(__dirname, 'static')));
// - but actually works simply so - 
app.use('/static', express.static('static'));
// for some reason not working - 
// app.use(express.static('static'));

app.use(express.urlencoded({ extended: false }));

// app.use(homeController);
app.use(routes);

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

// Create instances of the Movie class
const movie1 = new Movie(
    1,
    "Inception",
    "Sci-Fi",
    "Christopher Nolan",
    2010,
    "https://example.com/inception.jpg",
    8.8,
    "A mind-bending thriller about dreams within dreams."
);

const movie2 = new Movie(
    2,
    "The Shawshank Redemption",
    "Drama",
    "Frank Darabont",
    1994,
    "https://example.com/shawshank.jpg",
    9.3,
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
);

const movie3 = new Movie(
    3,
    "The Godfather",
    "Crime",
    "Francis Ford Coppola",
    1972,
    "https://example.com/godfather.jpg",
    9.2,
    "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
);

// Combine instances into an array
const movies = [movie1, movie2, movie3];

// if sync - can't come from fs/promises, if async - infinite reload
// fs.writeFile('./db.json', JSON.stringify(movies, null, 2), 'utf-8');
