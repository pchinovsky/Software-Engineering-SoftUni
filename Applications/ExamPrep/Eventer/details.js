import * as auth from './auth.js';
import * as lib from './lib.js';
import * as user from './userState.js';

export async function setupDetails(ctx) {
    const id = ctx.params.id;
    const html = await templDetails(ctx, del, go, id);
    ctx.render(html);
}

export async function templDetails(ctx, del, go, id) {
    const auth = user.auth();
    const event = await auth.getEventById(id);
    const owner = event._ownerId === user.id();
    const went = await auth.getGosByEventForUser(id, user.id());
    const count = await auth.getGosByEvent(id);

    let actionButtons = lib.nothing;
    
    if (auth) {
        if (owner) {
            actionButtons = lib.html`
                <div id="action-buttons">
                    <a href="/edit/${event._id}" id="edit-btn">Edit</a>
                    <a @click=${() => del(id)} href="javascript:void(0)" id="delete-btn">Delete</a>
                </div>
            `;
        } else if (!went) {
            actionButtons = lib.html`
                <div id="action-buttons">
                    <a @click=${() => go(id)} href="javascript:void(0)" id="go-btn">Going</a>
                </div>
            `;
        }
    }

    return lib.html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src="${event.imageUrl}" alt="example1" />
                <p id="details-title">${event.name}</p>
                <p id="details-category">
                    Category: <span id="categories">${event.category}</span>
                </p>
                <p id="details-date">
                    Date: <span id="date">${event.date}</span>
                </p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <span>${event.description}</span>
                    </div>
                </div>
                <h3>Going: <span id="go">${count}</span> times.</h3>
                ${actionButtons}
            </div>
        </section>
    `;
}

export async function del(id) {
    const ok = confirm('Are you sure you want to delete this item?');
    if (ok) {
        await auth.onDel(id);
    }
}

export async function go(id) {
    await auth.onGo(id);
}
