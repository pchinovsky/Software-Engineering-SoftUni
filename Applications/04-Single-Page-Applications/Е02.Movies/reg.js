import { toggleVis } from "./app.js";
import { onReg } from "./auth.js";

export function setupReg() {
    toggleVis('form-sign-up');
    document.getElementById('register-form').addEventListener('submit', onReg);
}