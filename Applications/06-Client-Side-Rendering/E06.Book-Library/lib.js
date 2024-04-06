import { html, render } from '../node_modules/lit-html/lit-html.js';

console.log(render);
export {
    html,
    render
};

export function templAll(handler) {
    return html`
    <button id="loadBooks" @click=${handler}>LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `
}

export function templLoad(data, handler) {
    return html`
    ${Object.entries(data).map(([id, book]) => {
    return html`
    <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button @click=${handler} id=${id}>Edit</button>
            <button @click=${handler} id=${id}>Delete</button>
        </td>
    </tr>
    `
})}
    `
}

export function templAdd(handler) {
    return html`
    <form @submit=${handler} id="add-form" style="display: block">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
    `
}

export function templUpdate(handler) {
    return html`
    <form @submit=${handler} id="edit-form" style="display: none">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
    `
}

export async function request(url, method, { headers = {}, body } = {}) {
    const defaultHeaders = { 'Content-Type': 'application/json' };
    try {
        const res = await fetch(url, {
            method,
            headers: { ...defaultHeaders, ...headers },
            ...(method !== 'GET' && body ? { body: JSON.stringify(body) } : {})
        });
        if (res.status !== 200) throw new Error(`${res.status} ${res.statusText}`);
        return await res.json();
    } catch (error) {
        console.error(`Operation failure: ${error.message}`);
    }
}