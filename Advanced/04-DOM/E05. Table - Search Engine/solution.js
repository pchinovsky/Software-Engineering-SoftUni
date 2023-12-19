function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll('tbody tr'));
      rows.forEach(tr => tr.classList.remove('select'));

      let input = document.getElementsByTagName('input')[0].value;
      let text = document.querySelectorAll('tbody td');

      for (const item of text) {
         if (item.textContent.includes(input)) {
            item.parentNode.classList.add('select');
         }
      }

      document.getElementsByTagName('input')[0].value = '';
   }
}