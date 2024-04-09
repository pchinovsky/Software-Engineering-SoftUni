import createApi from './api.js';
import { page } from '../lib.js';
import { updateNav } from '../app.js';
import { setupCre } from '../views/create.js';
import { root } from '../app.js';
import { setupEdit } from '../views/edit.js';

const api = createApi(null, null, (msg) => alert(msg));

const endpoints = {
    ITEMS: 'data/catalog',
    CRE: 'data/catalog',
    REG: 'users/register',
    LOG: 'users/login',
    LOGOUT: 'users/logout'
};

export async function getItems() {
    return await api.get(endpoints.ITEMS);
}

export async function getUserItems(id) {
    return await api.get(endpoints.ITEMS + `?where=_ownerId%3D%22${id}%22`);
}

export async function getItemDetails(id) {
    return await api.get(endpoints.ITEMS + `/${id}`);
}

export let isValid = {
    make: true,
    model: true,
    description: true,
    year: true,
    price: true,
    img: true,
};

export async function onUpdate(e, id) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    isValid = validate(data);

    if (Object.values(isValid).some(status => status !== true)) {
        setupEdit({ root, isValid });
        return;
    }

    try {
        await api.put(endpoints.ITEMS + `/${id}`, data);
        page.redirect('/home');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onCre(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    isValid = validate(data);

    if (Object.values(isValid).some(status => status !== true)) {
        setupCre(root, isValid);
        return;
    }
    
    try {
        await api.post(endpoints.CRE, data);
        e.target.reset();
        page.redirect('/home');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onDel(id) {
    const ok = confirm('Are you sure you want to delete thie item?');
    if (ok) {
        await api.delete(endpoints.ITEMS + `/${id}`);
        page.redirect('/home');
    }
}

export async function onReg(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
        const res = await api.post(endpoints.REG, data);
        localStorage.setItem('userToken', res.accessToken);
        localStorage.setItem('userId', res._id);
        localStorage.setItem('email', res.email);
        localStorage.setItem('pass', res.password);
        e.target.reset();
        page.redirect('/home');
        updateNav();
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onLog(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
        const res = await api.post(endpoints.LOG, data);
        localStorage.setItem('userToken', res.accessToken);
        localStorage.setItem('userId', res._id);
        localStorage.setItem('email', res.email);
        localStorage.setItem('pass', res.password);
        e.target.reset();
        page.redirect('/home');
        updateNav();
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onLogout() {
    try {
        await api.get(endpoints.LOGOUT);
        localStorage.clear();
        page.redirect('/home');
        updateNav();
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

function validate(data) {
    return {
        make: data.make.length >= 4,
        model: data.model.length >= 4,
        description: data.description.length >= 10,
        year: data.year >= 1950 && data.year <= 2050,
        price: data.price >= 0,
        img: !!data.img,
    };
}



