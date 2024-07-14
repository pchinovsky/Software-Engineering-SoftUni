import { onReg } from './auth.js';
import * as lib from './lib.js';


export function setupReg(ctx) {
    ctx.render(templReg(ctx, onSubmit));
}

export function templReg(ctx, submit) {
    return lib.html`
  <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${e => { submit(e, ctx) }} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
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

    if (data.password !== data['re-password']) {
        alert('Passowrds must match');
        return;
    }

    try {
        await onReg(data, ctx); 
        e.target.reset(); 
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

