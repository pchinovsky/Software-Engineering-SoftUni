import * as lib from './lib.js';
import * as auth from "./auth.js";


export async function setupEdit(ctx) {
    
    const id = ctx.params.id;
    const html = await templEdit(ctx, onSubmit, id);
    ctx.render(html);

    const tat = await auth.getTatById(id);

    document.querySelectorAll("option").forEach(option => {
        
        if (option.value === tat.userType) {
            option.selected = true;
        } else {
            option.selected = '';
        }
    })
}

async function templEdit(ctx, submit, id) {
    const tat = await auth.getTatById(id);

    return lib.html`
    <section id="edit">
          <div class="form">
            <h2>Edit tattoo</h2>
            <form @submit=${e => { submit(e, id) }} class="edit-form">
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Tattoo Type"
                .value=${tat.type}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                .value=${tat.imageUrl}
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
                .value=${tat.description}
              ></textarea>
              <select id="user-type" name="user-type">
                <option value="" disabled >Select your role</option>
                <option value="Tattoo Artist">Tattoo Artist</option>
                <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                <option value="First Time in Tattoo">
                  First Time in Tattoo
                </option>
                <option value="Tattoo Collector">Tattoo Collector</option>
                .value=${tat.userType}
              </select>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
    `;
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

