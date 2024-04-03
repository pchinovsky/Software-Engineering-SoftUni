import { render } from './lib.js';
import { templ } from './lib.js';

const input = document.getElementById('towns');
const div = document.getElementById('root');

document.querySelector('form.content').addEventListener('submit', (e) => {
    e.preventDefault();
    const value = templ(input.value.split(', '));
    render(value, div);
})


