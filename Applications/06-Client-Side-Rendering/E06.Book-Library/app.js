import * as lib from "./lib.js";

const body = document.querySelector('body');
const url = 'http://localhost:3030/jsonstore/collections/books';

let editId = null;

const data = lib.templAll(loadBooks);
const add = lib.templAdd(onCre);
const update = lib.templUpdate(onUpdate);
lib.render([data, add, update], body);

async function loadBooks() {
    const books = await getBooks();
    const data = lib.templLoad(books, onEdit);
    lib.render(data, document.querySelector('tbody'));
}

async function onEdit(e) {
    e.preventDefault();
    const id = e.target.id;
    try {
        if (e.target.textContent === 'Edit') {
            editId = id;
            toggleForms();
            const title = document.querySelector('form#edit-form input[name="title"]');
            const author = document.querySelector('form#edit-form input[name="author"]');
            const tr = e.target.parentElement.parentElement;
            title.value = tr.children[0].textContent;
            author.value = tr.children[1].textContent;
        } else if (e.target.textContent === 'Delete') {
            await onDel(id);
        } else {
            return;
        }
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

async function onCre(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (!data.title || !data.author) return;
    try {
        await lib.request(url, 'POST', { body: data });
        e.target.reset();
        loadBooks();
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

async function onUpdate(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
        await lib.request(url + `/${editId}`, 'PUT', { body: data });
        e.target.reset();
        loadBooks();
        editId = null;
        toggleForms();
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

async function onDel(id) {
    try {
        await lib.request(url + `/${id}`, 'DELETE');
        loadBooks();
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

function toggleForms() {
    const displayStatus = editId ? { 'add-form': "none", 'edit-form': "block" } : { 'add-form': "block", 'edit-form': "none" };

    document.querySelectorAll("#add-form, #edit-form").forEach(form => {
        form.style.display = displayStatus[form.getAttribute('id')];
    });
}

async function getBooks() {
    try {
        const data = await lib.request(url, 'GET');
        return data;
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}
