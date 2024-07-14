import * as lib from './lib.js';
import * as user from './userState.js';
import { getEventById } from './auth.js';
import { onEdit } from './auth.js';


export async function setupEdit(ctx) {
    const html = await templEdit(ctx, onSubmit);
    ctx.render(html);
}

async function templEdit(ctx, submit) {
    const id = ctx.params.id;
    const event = await getEventById(id);
    const owner = event._ownerId === user.id();

return lib.html`
    <section id="edit">
          <div class="form">
            <h2>Edit Event</h2>
            <form @submit=${e => submit(e, id)}class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
                .value=${event.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image"
                .value=${event.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
                .value=${event.category}
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
                .value=${event.description}
              ></textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
              .value=${event.date}
            />

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
        alert('Please fill all fields');
        return;
    }
    try {
        await onEdit(data, id); 
        e.target.reset(); 
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

