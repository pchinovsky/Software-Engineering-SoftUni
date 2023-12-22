function notify(message) {

  const div = document.getElementById('notification');
  const p = document.createElement('p');
  p.textContent = message;
  div.appendChild(p);
  div.style.display = 'block';

  div.addEventListener('click', hide);
  function hide() {
    div.style.display = 'none';
  };
}