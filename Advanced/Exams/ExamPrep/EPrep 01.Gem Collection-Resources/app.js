window.addEventListener("load", solve);

function solve() {

    const name = document.querySelector('#gem-name');
    const color = document.querySelector('#color');
    const carats = document.querySelector('#carats');
    const price = document.querySelector('#price');
    const type = document.querySelector('#type');

    const form = document.querySelector('form');
    const preview = document.querySelector('#preview-list');
    const collection = document.querySelector('#collection');
    const addBtn = document.querySelector('#add-btn');

    addBtn.addEventListener('click', addGem);
    let inputs = [name, color, carats, price, type];

    let values;
    
    function addGem(e) {
        e.preventDefault();

        if (inputs.some(input => input.value === '')) return;

        values = {
            name: name.value, 
            color: color.value, 
            carats: carats.value, 
            price: price.value, 
            type: type.value
        }

        clearInputs();
        
        const li = document.createElement('li');
        const article = document.createElement('article');
        li.classList.add('gem-info');
        
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        
        h4.textContent = values.name;
        p.textContent = `Color: ${values.color}`;
        p2.textContent = `Carats: ${values.carats}`;
        p3.textContent = `Price: ${values.price}$`;
        p4.textContent = `Type: ${values.type}`;
        
        article.appendChild(h4);
        article.appendChild(p);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);
        
        li.appendChild(article);
        
        const btnSave = document.createElement('button');
        const btnEdit = document.createElement('button');
        const btnCancel = document.createElement('button');
        
        btnSave.textContent = 'Save to Collection';
        btnEdit.textContent = 'Edit Information';
        btnCancel.textContent = 'Cancel';
        
        btnEdit.classList.add('edit-btn');
        btnSave.classList.add('save-btn');
        btnCancel.classList.add('cancel-btn');
        
        btnEdit.addEventListener('click', edit);
        btnSave.addEventListener('click', save);
        btnCancel.addEventListener('click', cancel);
        
        li.appendChild(btnSave);
        li.appendChild(btnEdit);
        li.appendChild(btnCancel);
        
        preview.appendChild(li);
        
        addBtn.disabled = true;
    }

    function clearInputs() {
        inputs.map(input => input.value = '');
    }

    function save() {
        preview.innerHTML = '';
        
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.classList.add('collection-item');
        p.textContent = `${values.name} - Color: ${values.color}/ Carats: ${values.carats}/ Price: ${values.price}$/ Type: ${values.type}`;
        li.appendChild(p);
        
        collection.appendChild(li);

        addBtn.disabled = false;
    }

    function edit() {
        preview.innerHTML = '';
        name.value = values.name;
        color.value = values.color;
        carats.value = values.carats;
        price.value = values.price;
        type.value = values.type;

        addBtn.disabled = false;
    }

    function cancel() {
        preview.innerHTML = '';
        addBtn.disabled = false;
    }
}
