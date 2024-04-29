import { toggleVis } from "./app.js";
import { onLog } from "./auth.js";

export function setupLog() {
    toggleVis('form-login');
    document.getElementById('form-login').addEventListener('submit', onLog);
}