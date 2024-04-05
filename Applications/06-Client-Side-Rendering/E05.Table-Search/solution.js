import * as lib from "./lib.js";

async function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const url = 'http://localhost:3030/jsonstore/advanced/table';
   const tbody = document.querySelector('.container>tbody');
   const inputField = document.getElementById('searchField');

   const data = await getData();
   const els = lib.templ(data);
   lib.render(els, tbody);

   function onClick() {
      let rows = Array.from(document.querySelectorAll('tbody tr'));
      let input = inputField.value.toLowerCase();
      rows.forEach(row => {
         if (row.textContent.toLowerCase().includes(input)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         } 
      })
      inputField.value = '';
   }

   async function getData() {
      try {
         return await lib.request(url, 'GET');
      } catch (error) {
          console.log(`Operation failure: ${error.message}`);
      }
   }
}
window.addEventListener('DOMContentLoaded', solve);