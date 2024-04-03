import { render, templ } from "./lib.js";
import { cats } from "./catSeeder.js";

const section = document.getElementById('allCats');

const catEls = templ(cats, toggle);
render(catEls, section);

function toggle(e) {
    const info = e.target.nextElementSibling;
    info.style.display = info.style.display === 'none' ? 'block' : 'none';
    e.target.textContent = e.target.textContent === 'Show status code' ? 'Hide status code' : 'Show status code';
}

