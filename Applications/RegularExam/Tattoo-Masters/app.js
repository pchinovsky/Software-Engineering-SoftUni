import * as lib from './lib.js';
import * as user from "./userState.js";
import * as auth from "./auth.js";

//
import { setupHome } from './home.js';
import { setupLog } from './log.js';
import { setupReg } from './reg.js';
import { setupCre } from './create.js';
import { setupEdit } from './edit.js';
import { setupDetails } from './details.js';
import { setupDashboard } from './dashboard.js';


const root = document.querySelector('main');
document.getElementById('logout').addEventListener('click', auth.onLogout);

function onLoad() {

    lib.page(expandCtx);
    lib.page(updateNavBar);
    lib.page('/home', setupHome);
    lib.page('/register', setupReg);
    lib.page('/login', setupLog);
    lib.page('/create', setupCre);
    lib.page('/edit/:id', setupEdit);
    lib.page('/details/:id', setupDetails);
    lib.page('/dashboard', setupDashboard);

    lib.page.redirect('/', '/home');    
    lib.page.start();

}

function expandCtx(ctx, next) {
    ctx.user = user.get();
    ctx.auth = user.auth();
    ctx.render = (html) => lib.render(html, root);
    next();
}

function updateNavBar(ctx, next) {
    const authState = ctx.auth;
    updateNav(authState);
    next();
}

export function updateNav(authState) {

    document.querySelectorAll(".user, .guest").forEach(a => {
        a.classList.toggle('show', a.classList.contains("user") === authState);
        a.classList.toggle('hide', a.classList.contains("user") !== authState);
    });
}

window.addEventListener('DOMContentLoaded', onLoad);

