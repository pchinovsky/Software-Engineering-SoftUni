import { log } from 'console';
import fs from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const dbpath = path.resolve('../db.json');
const dbpath = path.join(__dirname, '../db.json');


async function getDb() {
    const json = await fs.readFile(dbpath, { encoding: 'utf-8' });
    const data = JSON.parse(json);
    return data;
}

async function getAll() {
    // console.log('in get movies');

    const db = await fs.readFile(dbpath, { encoding: "utf-8" });
    // console.log(db);

    const data = JSON.parse(db, { encoding: 'utf-8' });
    // console.log(data);

    // only if movies are each objs in an arr, while of objs in movie obj in a wrapper obj, needs changes. 
    return data.movies;
}

async function create(movieData) {
    const db = await getDb();
    db.movies.push(movieData);
    return saveDb(db);
};

function saveDb(data) {
    return fs.writeFile(dbpath, JSON.stringify(data, {}, 2));
}

export default {
    getAll,
    create
}