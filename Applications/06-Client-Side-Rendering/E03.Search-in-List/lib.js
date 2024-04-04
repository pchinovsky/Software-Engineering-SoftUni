import { html, render } from '../node_modules/lit-html/lit-html.js';

export {
    html,
    render
};

export function templ(data) {
    return html`
    <ul>
        ${data.map(town => html`<li>${town}</li>`)}
    </ul>
    `
}