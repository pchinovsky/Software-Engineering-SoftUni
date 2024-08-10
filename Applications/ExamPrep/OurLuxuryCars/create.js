import * as lib from './lib.js';
import * as auth from "./auth.js";


export async function setupCre(ctx) {

    const html = await templCre(ctx, onSubmit);
    ctx.render(html);

}

async function templCre(ctx, submit) {
    return lib.html`
    <section id="create">
          <div class="form form-auto">
            <h2>Share Your Car</h2>
            <form @submit=${e => { submit(e, ctx) }} class="create-form">
              <input type="text" name="model" id="model" placeholder="Model"/>
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
    `
}

async function onSubmit(e, ctx) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const empty = (v) => v === '';
    if (Object.values(data).some(empty)) {
        return alert('Please fill all fields');
    }
    try {
        await auth.onCre(data, ctx); 
        e.target.reset(); 
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

