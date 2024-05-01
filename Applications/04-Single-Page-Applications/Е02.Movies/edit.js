import { toggleVis } from "./app.js";
import { getMovieById, onUpdate } from "./auth.js";


export async function setupEdit(id) {
    toggleVis('edit-movie');
    const mov = await getMovieById(id);
    document.querySelector('section#edit-movie input#title').value = mov.title;
    document.querySelector('section#edit-movie input#imageUrl').value = mov.img;
    document.querySelector('section#edit-movie textarea').value = mov.description;
    
    document.querySelector('section#edit-movie form').addEventListener('submit', (e) => onUpdate(e, id));
}