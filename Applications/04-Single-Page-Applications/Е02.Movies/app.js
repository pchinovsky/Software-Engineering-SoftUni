import { setupAdd } from "./add.js";
import { setupDetails } from "./details.js";
import { setupEdit } from "./edit.js";
import { setupLog } from "./log.js";
import { setupReg } from "./reg.js";
import { getMovies, onLogout, onDel} from "./auth.js";
import { onLike, onUnlike } from "./details.js";

const list = document.getElementById('movies-list');

const routes = {
    'home': onStart,
    'add': setupAdd,
    'edit': (id) => {setupEdit(id)},
    'like': (id) => {onLike(id)},
    'unlike': (id) => {onUnlike(id)},
    'delete': (id) => {onDel(id)},
    'details': (id) => {setupDetails(id)},
    'register': setupReg,
    'login': setupLog,
    'logout': onLogout
}

const links = {
    '/': 'home',
    '/register': 'register',
    '/login': 'login',
    '/logout': 'logout'
}

async function onStart() {
    toggleVis('home-page');
    if (!document.getElementById('pagination-controls')) pageControls(changePage);
    await showMovies();
    updateNav();
    btnRouting();
    
    document.querySelector('nav').addEventListener('click', onNav);
}

export function goTo(route, id) {
    routes[route](id);
}

export function toggleVis(id) {
    document.querySelectorAll('section').forEach(sec => {
        if (sec.id !== 'movie') sec.style.display = sec.id === id ? 'block' : 'none';
    })
}

function onNav(e) {
    e.preventDefault();
    if (e.target.tagName !== 'A') return;
    const link = e.target.getAttribute('href');
    routes[links[link]]();
}

export function updateNav() {
    const user = localStorage.getItem('userToken');

    const email = localStorage.getItem('email');
    document.querySelector('#welcome-msg').textContent = `Welcome, ${email}`;

    const displayStatus = user ? { user: "block", guest: "none" } : { user: "none", guest: "block" };

    document.querySelectorAll(".user, .guest").forEach(a => {
        a.style.display = displayStatus[a.classList.contains("user") ? "user" : "guest"];
    });
}

let currentPage = 1;
const pageSize = 5;

async function showMovies(page = 1) {
    try {
        const data = await getMovies(page, pageSize);
        let moviesHTML = ''; 
        data.forEach(mov => {
            moviesHTML += movieTempl(mov); 
        });
        list.innerHTML = moviesHTML;
        updatePagination(data.length);
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / pageSize);
    document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('prev-page').disabled = currentPage <= 1;
    document.getElementById('next-page').disabled = currentPage >= totalPages;
}

export function changePage(direction) {
    currentPage += direction;
    showMovies(currentPage);
}

function pageControls() {
    const controlsHTML = `
    <div id="pagination-controls">
        <button id="prev-page">Previous</button>
        <span id="page-info">Page 1</span>
        <button id="next-page">Next</button>
    </div>`;
    document.querySelector('.mt-3').innerHTML += controlsHTML;
    document.getElementById('prev-page').addEventListener('click', () => changePage(-1));
    document.getElementById('next-page').addEventListener('click', () => changePage(1));
}


function movieTempl(mov) {
    return `
    <li class="card mb-4">
        <img class="card-img-top" src=${mov.img} alt="Card image cap" width="400"/>
        <div class="card-body">
            <h4 class="card-title">${mov.title}</h4>
            <a href="#"> </a>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-info" data-id=${mov._id} data-route="details">Details</button>
        </div>
    </li>`;
}

export function btnRouting() {
    document.querySelectorAll('[data-route]').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const route = btn.getAttribute('data-route');
            let id = btn.getAttribute('data-id');
            const likeId = btn.getAttribute('data-like');
            goTo(route, id);
        });
    });
}

window.addEventListener('DOMContentLoaded', onStart);