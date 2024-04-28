import { toggleVis } from "./app.js";
import { onAdd } from "./auth.js";


export function setupAdd() {
 
    toggleVis('add-movie');
    document.getElementById('add-movie-form').addEventListener('submit', onAdd);
}