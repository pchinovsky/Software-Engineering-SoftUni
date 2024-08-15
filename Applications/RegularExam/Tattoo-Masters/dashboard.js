import * as lib from './lib.js';
import * as auth from "./auth.js";


export async function setupDashboard(ctx) {

    const html = await templDashboard(ctx);
    ctx.render(html);

}

    export async function templDashboard(ctx) {

        const tats = await auth.getTats();
    
        return lib.html`
             <h2>Collection</h2>
            <section id="tattoos">
                ${tats.length ? tats.map(tat => {
                    return lib.html`
                    <div class="tattoo">
                    <img src="${tat.imageUrl}" alt="example1" />
                    <div class="tattoo-info">
                      <h3 class="type">${tat.type}</h3>
                      <span>Uploaded by </span>
                      <p class="user-type">${tat.userType}</p>
                      <a class="details-btn" href="/details/${tat._id}">Learn More</a>
                    </div>
                  </div>
                    `;
                }) : lib.html`
                    <h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>
                `}
            </section>
           
        `;
    }
    

