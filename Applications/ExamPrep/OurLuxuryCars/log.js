import * as lib from './lib.js';
import * as auth from "./auth.js";


export function setupLog(ctx) {

    const html = templLog(onSubmit, ctx);
    ctx.render(html);
}

function templLog(submit, ctx) {
    return lib.html`
     <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${e => { submit(e, ctx) }} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
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
        throw new Error("empty fields");
    }
    try {
        await auth.onLog(data, ctx); 
        e.target.reset(); 
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}
