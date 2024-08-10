import * as lib from './lib.js';
import * as auth from "./auth.js";


export async function setupEdit(ctx) {

    const html = await templEdit(ctx, onSubmit);
    ctx.render(html);
}

async function templEdit(ctx, submit) {

    const id = ctx.params.id;
    console.log(`id 1 - ${id}`);
    
    const car = await auth.getCarById(id);

    return lib.html`
    <section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form @submit=${(e) => { submit(e, id) }} class="edit-form">
              <input type="text" name="model" id="model" placeholder="Model" .value=${car.model} />
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
                .value=${car.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                .value=${car.price}
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
                .value=${car.weight}
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
                .value=${car.speed}
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
                .value=${car.about}
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
    `
}

async function onSubmit(e, id) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const empty = (v) => v === '';
    if (Object.values(data).some(empty)) {
        return alert('Please fill all fields');
    }
    try {
        await auth.onEdit(data, id); 
        e.target.reset(); 
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

