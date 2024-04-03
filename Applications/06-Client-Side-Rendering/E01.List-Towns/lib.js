import { html, render } from '../node_modules/lit-html/lit-html.js';

export {
    html,
    render
};

export function templ(val) {
    return html`
    <ul>
        ${val.map(inp => html`<li>${inp}</li>`)}
    </ul>
    `
}