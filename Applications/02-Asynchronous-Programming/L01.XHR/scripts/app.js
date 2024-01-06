function loadRepos() {

   const url = 'https://api.github.com/users/testnakov/repos';
   const div = document.getElementById('res');

   const XHR = new XMLHttpRequest();
   XHR.addEventListener('readystatechange', onChange);

   function onChange() {
      if (XHR.readyState === 4 && XHR.status === 200) {
         div.textContent = XHR.responseText;
      }
   }
   XHR.open('GET', url);
   XHR.send();
}