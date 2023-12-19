function search() {

   let input = document.getElementsByTagName('input')[0];
   let res = document.getElementById('result');
   let list = document.querySelectorAll('li');

   let matches = 0;

   for (const li of list) {

      let text = input.value;

      if (li.textContent.includes(text)) {
         li.style.textDecoration = 'underline'
         li.style.fontWeight = 'bold';
         matches++
      } else {
         li.style.textDecoration = ''
         li.style.fontWeight = 'normal';
      }

   }

   res.textContent = `${matches} matches found`;
   input.value = '';

}


