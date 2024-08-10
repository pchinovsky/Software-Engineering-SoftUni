import * as lib from './lib.js';
import * as auth from "./auth.js";


export async function setupDashboard(ctx) {

    const html = await templDashboard(ctx);
    ctx.render(html);

}

export async function templDashboard(ctx) {

    const cars = await auth.getCars();

    return lib.html`
        <h3 class="heading">Our Cars</h3>
        <section id="dashboard">
          ${cars.length ? cars.map(car => lib.html`
             <div class="car">
                <img src="${car.imageUrl}" alt="${car.model}" />
                <h3 class="model">${car.model}</h3>
                <div class="specs">
                  <p class="price">Price: €${car.price.toLocaleString()}</p>
                  <p class="weight">Weight: ${car.weight} kg</p>
                  <p class="top-speed">Top Speed: ${car.speed} kph</p>
                </div>
                <a class="details-btn" href="/details/${car._id}">More Info</a>
             </div>
          `) : lib.html`
            <h3 class="nothing">Nothing to see yet</h3>
          `}
        </section>
    `;
}


