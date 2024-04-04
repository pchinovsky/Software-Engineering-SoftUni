import { towns } from "./towns.js";
import { render, templ } from "./lib.js";

const div = document.getElementById('towns');
const btn = document.querySelector('button');
const inputField = document.getElementById('searchText');
const result = document.getElementById('result');
btn.addEventListener('click', search);

const data = templ(towns);
render(data, div);

function search() {
   const input = inputField.value;
   let matches = 0;
   let towns = document.querySelectorAll('li');
   towns.forEach(li => {
      if (li.textContent.includes(input) && input !== '') {
         li.classList.add('active');
         matches++
      } else {
         li.classList.remove('active');
      }
   })
   result.textContent = `${matches} matches found`
}
