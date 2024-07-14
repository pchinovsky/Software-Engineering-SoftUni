import * as lib from './lib.js';
import { onCre } from './auth.js';


export async function setupCre(ctx) {
    const html = await templCre(ctx, onSubmit);
    ctx.render(html);

}

async function templCre(ctx, submit) {
    return lib.html`
    <section id="create">
          <div class="form">
            <h2>Add Event</h2>
            <form @submit=${e => submit(e, ctx)}class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image URL"
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
            />

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
        alert('Please fill all fields');
        return;
    }
    try {
        await onCre(data, ctx); 
        e.target.reset(); 
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

