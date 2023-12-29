window.addEventListener("load", solve);

function solve() {

  const main = document.getElementById('main');
  const button = document.querySelector('input[type=button]');
  const preview = document.getElementById('preview-list');

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const story = document.getElementById('story');

  let inputs = [firstName, lastName, age, storyTitle, genre, story];
  let values = [];

  button.addEventListener('click', prev);

  function prev() {
    if (inputs.some(el => el.value === '')) {
      return;
    }
    let li = document.createElement('li');

    li.classList.add('story-info');
    let article = document.createElement('article');
     
    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`
    let p = document.createElement('p');
    p.textContent = `Age: ${age.value}`;
    let p2 = document.createElement('p');
    p2.textContent = `Title: ${storyTitle.value}`
    let p3 = document.createElement('p');
    p3.textContent = `Genre: ${genre.value}`
    let p4 = document.createElement('p');
    p4.textContent = story.value;

    let els = [h4, p, p2, p3, p4];
    els.forEach(el => article.appendChild(el));

    li.appendChild(article);

    let btnSave = document.createElement('button');
    btnSave.classList.add('save-btn');
    btnSave.textContent = 'Save Story';
    btnSave.addEventListener('click', save);
    let btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-btn');
    btnEdit.textContent = 'Edit Story';
    btnEdit.addEventListener('click', edit);
    let btnDel = document.createElement('button');
    btnDel.classList.add('delete-btn');
    btnDel.textContent = 'Delete Story';
    btnDel.addEventListener('click', del);

    let btns = [btnSave, btnEdit, btnDel];
    btns.forEach(btn => li.appendChild(btn));
    preview.appendChild(li);
    inputs.forEach(el => values.push(el.value));
    inputs.forEach(el => el.value = '');
    button.disabled = true;

    function save() {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      let h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';
      main.appendChild(h1);
    }

    function edit() {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = values[i];
      }
      button.disabled = false;   
      btns.forEach(btn => btn.disabled = true);
      preview.removeChild(li);
    }

    function del() {
      preview.removeChild(li);
      button.disabled = false;
    }

  }

}
