import movieData from "../data/movieData.js";

const getAll = () => movieData.getAll();
const getOne = async (id) => {
    const movies = await getAll();
    const movie = movies.find(m => m.id === id);
    movie.stars = Math.floor(movie.rating / 2);
    return movie;
};

const create = (movie) => {

    const id = new Date().getTime();
    movie.id = id;
    return movieData.create(movie);

};

const search = async (query) => {
    let movies = await getAll();
    console.log('movies - ', movies);
    console.log('query - ', query);

    let filteredMovies = movies.filter(m => {
        // match - cond to check if each movie is returned
        // if more than one query is entered, and movie matches one, but not the other, won't be returned
        let match = true;
        if (query.title) {
            match = match && m.title.toLowerCase().includes(query.title.toLowerCase());
        }
        if (query.genre) {
            match = match && m.genre.toLowerCase().includes(query.genre.toLowerCase());
        }
        if (query.year) {
            match = match && m.year.toString() === query.year.toString();
        }
        return match;
    });

    console.log('filtered movies - ', filteredMovies);


    if (query.title || query.genre || query.year) {
        movies = filteredMovies;
    }

    return movies;
};

export default {
    getAll,
    getOne,
    create,
    search
}