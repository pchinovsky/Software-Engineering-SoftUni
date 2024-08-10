import * as lib from './lib.js';


export function setupHome(ctx) {

    ctx.render(templHome(ctx));
}

export function templHome(ctx) {
    return lib.html`
    <section id="hero">
          <h1>
            Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
          </h1>
        </section>
    `
}



