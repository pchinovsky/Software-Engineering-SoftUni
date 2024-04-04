import * as lib from "./lib.js";

async function dropdown() {
    const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
    const form = document.querySelector('form');
    const inputField = document.getElementById('itemText');
    const sel = document.getElementById('menu');

    form.addEventListener('submit', onCre);

    loadItems();

    async function loadItems() {
        const data = await getItems();
        const els = lib.templ(data);
        lib.render(els, sel);
    }

    async function onCre(e) {
        e.preventDefault();
        const data = inputField.value;
        try {
            await lib.request(url, 'POST', { body: {text: data} });
            loadItems();
            inputField.value = '';
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }

    async function getItems() {
        try {
            return await lib.request(url, 'GET');
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }
}
window.addEventListener('DOMContentLoaded', dropdown);