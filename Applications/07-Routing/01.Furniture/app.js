import * as lib from './lib.js';
import { setupCre } from './views/create.js';
import { setupReg } from './views/reg.js';
import { setupCat } from './views/catalog.js';
import { setupLog } from './views/log.js';
import { setupEdit } from './views/edit.js';
import { setupDetails } from './views/details.js';
import { onLogout } from './api/auth.js';

export const root = document.querySelector('.container');
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', onLogout)

function onLoad() {
    lib.page('/home', () => { setupCat({root, filter: null}) });
    lib.page('/my-furniture', () => { setupCat({root, filter: 'user'}) });
    lib.page('/create', () => { setupCre(root) });
    lib.page('/register', () => { setupReg(root) });
    lib.page('/login', () => { setupLog(root) });
    lib.page('/edit/:id', ctx => { setupEdit({ctx, root}) });
    lib.page('/details/:id', ctx => { setupDetails(ctx, root) });

    lib.page.redirect('/', '/home');
    lib.page.start();

    updateNav();
}

export function updateNav() {
    const user = localStorage.getItem('userToken');
    document.querySelectorAll("#user, #guest").forEach(a => {
        if (a.id === 'user') {
            a.classList.toggle('show', user);
            a.classList.toggle('hide', !user);
        } else if (a.id === 'guest') {
            a.classList.toggle('show', !user);
            a.classList.toggle('hide', user);
        }
    });
}
window.addEventListener('DOMContentLoaded', onLoad);
