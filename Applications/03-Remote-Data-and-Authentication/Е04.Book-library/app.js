function onLoad() {
    let currentOp = 'create';
    let editId = '';
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const btnLoad = document.getElementById('loadBooks');
    const form = document.querySelector('form');
    const tbody = document.querySelector('table>tbody');
    btnLoad.addEventListener('click', load);
    form.addEventListener('submit', onCre);
    tbody.addEventListener('click', onEdit);

    async function load() {
        try {
            const data = await request(url, 'GET');
            const frag = document.createDocumentFragment();
            for (const book in data) {
                console.log(data[book]);
                const tr = document.createElement('tr');
                const tdAuthor = document.createElement('td');
                const tdBook = document.createElement('td');
                const tdBtns = document.createElement('td');
                const btnEdit = document.createElement('button');
                const btnDel = document.createElement('button');
                btnEdit.textContent = 'Edit';
                btnEdit.id = book;
                btnDel.textContent = 'Delete';
                btnDel.id = book;
                tdBtns.appendChild(btnEdit);
                tdBtns.appendChild(btnDel);
                tdAuthor.textContent = data[book].author;
                tdBook.textContent = data[book].title;
                tr.appendChild(tdBook);
                tr.appendChild(tdAuthor);
                tr.appendChild(tdBtns);

                frag.appendChild(tr);
            }
            tbody.replaceChildren(frag);
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }

    async function onCre(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        if (!data.title || !data.author) return;
        if (currentOp === 'create') {
            try {
                await request(url, 'POST', { body: data });
                e.target.reset();
                load();
            } catch (error) {
                console.log(`Operation failure: ${error.message}`);
            }
        } else if (currentOp === 'edit') {
            try {
                await request(url + `/${editId}`, 'PUT', { body: data });
                e.target.reset();
                currentOp = 'create';
                load();
            } catch (error) {
                console.log(`Operation failure: ${error.message}`);
            }
        }
    }

    async function onEdit(e) {
        e.preventDefault();
        const id = e.target.id;
        try {
            if (e.target.textContent === 'Edit') {
                await onUpdate(e, id);
            } else if (e.target.textContent === 'Delete') {
                await onDel(id);
            } else {
                return;
            }
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }

    async function onUpdate(e, id) {
        const author = document.querySelector('input[name="author"]');
        const title = document.querySelector('input[name="title"]');
        const tr = e.target.parentElement.parentElement;
        author.value = tr.children[1].textContent;
        title.value = tr.children[0].textContent;
        editId = id;
        currentOp = 'edit';
    }

    async function onDel(id) {
        try {
            await request(url + `/${id}`, 'DELETE');
            load();
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }
}

async function request(url, method, options = {}) {
    const defaultHeaders = { 'Content-Type': 'application/json' };
    const ops = {
        method: method,
        headers: options.headers || defaultHeaders,
    };
    if (method !== 'GET' && options.body) ops.body = JSON.stringify(options.body);
    try {
        const res = await fetch(url, ops);
        if (res.status !== 200) {
            throw new Error(`${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}
window.addEventListener('DOMContentLoaded', onLoad);


