import * as lib from './lib.js';
import * as auth from "./auth.js";


export async function setupCre(ctx) {

    const html = await templCre(ctx, onSubmit);
    ctx.render(html);

}

async function templCre(ctx, submit) {
    return lib.html`
    <section id="create">
          <div class="form">
            <h2>Add tattoo</h2>
            <form @submit=${e => { submit(e, ctx) }} class="create-form">
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Tattoo Type"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
              ></textarea>
              <select id="user-type" name="user-type">
                <option value="" disabled selected>Select your role</option>
                <option value="Tattoo Artist">Tattoo Artist</option>
                <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                <option value="First Time in Tattoo">
                  First Time in Tattoo
                </option>
                <option value="Tattoo Collector">Tattoo Collector</option>
              </select>
              <button type="submit">Add tattoo</button>
            </form>
          </div>
        </section>
    `
}

async function onSubmit(e, ctx) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    
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

