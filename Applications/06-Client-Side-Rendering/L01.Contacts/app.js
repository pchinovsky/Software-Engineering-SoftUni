import { contacts } from "./contacts.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";

function onLoad() {
    const div = document.getElementById('contacts');
    const data = contacts.map(con => templ(con, details));
    render(data, div);

    function templ(data, handler) {
        return html`
        <div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${data.name}</h2>
                <button class="detailsBtn" @click=${handler}>Details</button>
                <div class="details" id="1">
                    <p>Phone number: ${data.phoneNumber}</p>
                    <p>Email: ${data.phoneNumber}</p>
                </div>
            </div>
        </div>
        `
    }

    function details(e) {
        e.preventDefault();
        const details = e.target.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    }
}
window.addEventListener('DOMContentLoaded', onLoad);
