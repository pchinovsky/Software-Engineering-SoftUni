import * as lib from './lib.js';
import * as auth from "./auth.js";


export function setupSearch(ctx) {

  const cars = [];

  const html = templSearch(onSubmit, ctx, cars);
  ctx.render(html);

  async function onSubmit(e, ctx) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    if (data.search === '') {
      return alert('Please enter a search query');
    }
    try {
      const cars = await auth.onSearch(data);
      e.target.reset();

      const html = templSearch(onSubmit, ctx, cars);
      ctx.render(html);
    } catch (error) {
      console.log(`Operation failure: ${error.message}`);
    }
  }
}

function templSearch(submit, ctx, cars) {

  let res;

  if (!cars.length) {
    res = lib.html`
    <h2 class="no-available">No result.</h2>
    `;
  } else {
    res = lib.html`
      ${cars.map(c => lib.html`
        <div class="car">
          <img src="${c.imageUrl}" alt="example1"/>
          <h3 class="model">${c.model}</h3>
          <a class="details-btn" href="/details/${c._id}">More Info</a>
        </div>
      `)}
    `;
  }

  return lib.html`
    <section id="search">
          <div class="form">
            <h4>Search</h4>
            <form  @submit=${e => { submit(e, ctx) }}class="search-form">
              <input type="text" name="search" id="search-input" />
              <button class="button-list">Search</button>
            </form>
          </div>
          <div class="search-result">
          ${res}
          </div>
        </section>
    `
}


