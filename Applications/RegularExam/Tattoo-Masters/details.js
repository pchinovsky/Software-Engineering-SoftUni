import * as lib from './lib.js';
import * as user from './userState.js';
import * as auth from "./auth.js";


export async function setupDetails(ctx) {

    const id = ctx.params.id;
    const html = await templDetails(ctx, del, like, id);
    ctx.render(html);
}

export async function templDetails(ctx, del, like, id) {
    const logged = user.auth();
    const tat = await auth.getTatById(id);
    const owner = tat._ownerId === user.id();
    const count = await auth.getLikesByTat(id);

    let btns = lib.nothing;

    if (logged) {
        const liked = await auth.getLikesByTatForUser(id, user.id());
        if (owner) {
            btns = lib.html`
                <div id="action-buttons">
                  <a href="/edit/${tat._id}" id="edit-btn">Edit</a>
                  <a @click=${() => del(id)} href="javascript:void(0)" id="delete-btn">Delete</a>
                </div>
            `;
        } else if (liked === 0) {
            btns = lib.html`
                <div id="action-buttons">
                    <a @click=${() => like(id)} href="javascript:void(0)" id="like-btn">Like</a>
                </div>
            `;
        }
    }

    return lib.html`
        <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src="${tat.imageUrl}"
              alt="example1"
            />
            <div>
              <div id="info-wrapper">
                <p id="details-type">${tat.type}</p>
                <div id="details-description">
                  <p id="user-type">${tat.userType}</p>
                  <p id="description">${tat.description}</p>
                </div>
                <h3>Like tattoo:<span id="like">${count}</span></h3>
                ${btns}
                </div>
              </div>
            </div>
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

export async function like(id) {
    await auth.onLike(id);
}


