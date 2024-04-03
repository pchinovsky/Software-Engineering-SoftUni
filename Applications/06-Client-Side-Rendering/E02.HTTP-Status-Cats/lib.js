import { html, render } from '../node_modules/lit-html/lit-html.js';

export {
    html,
    render
};

export function templ(data, handler) {
    return html`
    <ul>
        ${data.map(cat => {
        return html`
        <li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button @click=${handler} class="showBtn">Show status code</button>
                <div class="status" style="display: none" id=${cat.id}>
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
        </li>`
    })}
    </ul>
    `
}