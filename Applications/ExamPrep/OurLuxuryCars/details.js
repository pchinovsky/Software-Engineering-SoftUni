import * as lib from './lib.js';
import * as user from './userState.js';
import * as auth from './auth.js';
import { getCarById } from './auth.js';


export async function setupDetails(ctx) {

    const id = ctx.params.id;

    const html = await templDetails(ctx, del, id);
    ctx.render(html);
}

export async function templDetails(ctx, del, id) {
    const logged = user.auth();
  
    const car = await auth.getCarById(id);
    const owner = car._ownerId === user.id();

    let btns = lib.nothing;

    if (logged && owner) {
        btns = lib.html`
                <div id="action-buttons">
                <a href="/edit/${car._id}" id="edit-btn">Edit</a>
                <a @click=${() => del(id)} href="javascript:void(0)" id="delete-btn">Delete</a>
                </div>
            `;
    }

    return lib.html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${car.imageUrl}" alt="example1" />
            <p id="details-title">${car.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="price">${car.price}</p>
                <p class="weight">${car.weight}</p>
                <p class="top-speed">${car.speed}</p>
                <p id="car-description">${car.about}</p>
              </div>
              ${btns}
            </div>
          </div>
        </section>
    `;
}

export async function del(id) {

    const ok = confirm('Are you sure you want to delete this item?');
    console.log(`is it ok - ${ok}`);
    console.log(`del id - ${id}`);
    
    
    if (ok) {
        await auth.onDel(id);
    }
}


