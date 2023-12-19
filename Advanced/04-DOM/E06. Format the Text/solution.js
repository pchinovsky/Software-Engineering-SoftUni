function solve() {
  const res = document.getElementById('output');
  res.textContent = '';
  const text = document.getElementById('input').value;
  const sentences = text.split('.').filter(el => el);

  let p = [];
  for (const sentence of sentences) {
    p.push(sentence);

    if (p.length === 3) {
      res.innerHTML += `<p>${p.join('.')}.</p>`;
      p.length = 0;
    }
  }

  if (p.length > 0) res.innerHTML += `<p>${p.join('.')}.</p>`;
  
}