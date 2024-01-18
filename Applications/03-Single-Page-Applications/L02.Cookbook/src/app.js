
import * as auth from "./auth.js";
import * as ui from "./ui.js";

window.addEventListener('load', onLoad);

export let currentPage = 'cat';
export function setCurrentPage(newPage) {
    currentPage = newPage;
    if (currentPage === 'cat') {
        ui.navigation();
    }
}

async function onLoad() {

    ui.navigation();
    ui.cards();
    ui.toggleVis();
    reg();
    log();
    logout();
    cre();

}

function reg() {
    const regForm = document.getElementById('regForm');
    regForm.addEventListener('submit', auth.onReg);
}

function log() {
    const loginForm = document.getElementById('logForm');
    loginForm.addEventListener('submit', auth.onLog);
}

function logout() {
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', auth.onLogout);
}

function cre() {
    const creForm = document.getElementById('creForm');
    creForm.addEventListener('submit', auth.onCre);
}








