import { html, render } from '../node_modules/lit-html/lit-html.js';

console.log(render);
export {
    html,
    render
};

export function templ(data) {
    return html`
    ${Object.values(data).map(op => {
        return html`<option value=${op._id}>${op.text}</option>`
    })}
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