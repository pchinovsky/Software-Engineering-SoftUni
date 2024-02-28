import * as api from "./api.js";
import { currentPage, setCurrentPage } from "./app.js";



export async function onUpdate(e) {
    e.preventDefault();

    console.log(e.currentTarget);

    const formData = new FormData(e.currentTarget);
    const recipeId = sessionStorage.getItem('currentRecipeId');
    let data = Object.fromEntries(formData.entries());

    data.ingredients = data.ingredients.split('\n');
    data.steps = data.steps.split('\n');

    try {
        const res = await api.updateRecipeApi(data, recipeId);
        document.getElementById(currentPage).style.display = 'none';
        document.querySelector('#cat').style.display = 'block';
        setCurrentPage('cat');
    } catch (err) {
        console.error(`Operation failure: ${err.message}`);
    }
}
// put new info to server


export function onLogout(e) {
    e.preventDefault();
    const token = sessionStorage.getItem('token');

    try {
        sessionStorage.removeItem('token');
        document.getElementById(currentPage).style.display = 'none';
        document.querySelector('#cat').style.display = 'block';
        setCurrentPage('cat');
    } catch (err) {
        console.error(`Operation failure ${err.message}`);
    }
}

export async function onReg(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password, rePass } = Object.fromEntries(formData.entries());

    if (password !== rePass) {
        throw new Error('Password inputs do not match!');
    }

    try {
        const data = await api.regUserApi(email, password);
        const token = data.accessToken;
        sessionStorage.setItem('token', data.accessToken);
        document.getElementById(currentPage).style.display = 'none';
        document.querySelector('#cat').style.display = 'block';
        setCurrentPage('cat');
    } catch (err) {
        console.error(`Operation failure: ${err.message}`);
    }
}

export async function onLog(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData.entries());

    try {

        const data = await api.logUserApi(email, password);
        sessionStorage.setItem('token', data.accessToken);
        document.getElementById(currentPage).style.display = 'none';
        document.querySelector('#cat').style.display = 'block';
        setCurrentPage('cat');
    } catch (err) {
        console.error(`Operation failure: ${err.message}`);
    }
}

export async function onCre(e) {
    e.preventDefault();

    console.log(e.currentTarget);

    const formData = new FormData(e.currentTarget);
    let data = Object.fromEntries(formData.entries());

    data.ingredients = data.ingredients.split('\n');
    data.steps = data.steps.split('\n');

    try {
        const res = await api.creRecipeApi(data);
        document.getElementById(currentPage).style.display = 'none';
        document.querySelector('#cat').style.display = 'block';
        setCurrentPage('cat');
    } catch (err) {
        console.error(`Operation failure: ${err.message}`);
    }
}

export async function onDel(e) {
    e.preventDefault();

    // console.log(e.currentTarget);
    // console.log(`onDel - ${e.target.dataset.id}`);

    const recipeId = e.target.dataset.id;

    try {
        const res = await api.delRecipeApi(recipeId);
    } catch (err) {
        console.error(`Operation failure: ${err.message}`);
    }
}


