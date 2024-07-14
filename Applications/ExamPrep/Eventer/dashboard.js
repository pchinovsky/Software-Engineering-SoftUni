import { getEvents } from './auth.js';
import * as lib from './lib.js';


export async function setupDashboard(ctx) {
    const html = await templDashboard(ctx);
    ctx.render(html);

}

export async function templDashboard(ctx) {
    const events = await getEvents();

    return lib.html`
        <h2>Current Events</h2>
        <section id="dashboard">
            ${events.length === 0 ? 
                lib.html`
                    <h4>No Events yet.</h4>
                ` :                
                events.map(e => lib.html`
                    <div class="event">
                        <img src="${e.imageUrl}" alt="example1" />
                        <p class="title">${e.name}</p>
                        <p class="date">${e.date}</p>
                        <a class="details-btn" href="/details/${e._id}">Details</a>
                    </div>
                `)
            }
        </section>
    `;
}

