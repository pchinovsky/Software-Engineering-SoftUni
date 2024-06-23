window.addEventListener('load', solve);

function solve() {
    const name = document.querySelector('#first-name');
    const last = document.querySelector('#last-name');
    const fromDate = document.querySelector('#from-date');
    const toDate = document.querySelector('#to-date');

    const inputs = [name, last, fromDate, toDate];

    const btn = document.querySelector('#next-btn');
    const form = document.querySelector('form');
    form.addEventListener('submit', onNext);

    let vacation = document.querySelector('.info-list');
    let confirm = document.querySelector('.confirm-list');
    const status = document.querySelector('#status');
    status.addEventListener('click', reload);

    let values;

    function onNext(e) {
        e.preventDefault();

        if (inputs.some(el => el.value === '')) return;

        const start = new Date(fromDate.value);
        const end = new Date(toDate.value);

        if (start >= end) return ;

        values = {
            name: name.value,
            last: last.value,
            fromDate: fromDate.value,
            toDate: toDate.value
        }

        clearInputs();

        const editBtn = createBtn('Edit', 'edit-btn', edit);
        const continueBtn = createBtn('Continue', 'continue-btn', cont);

        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p2 = document.createElement('p');

        h3.textContent = `Name: ${values.name} ${values.last}`;
        p.textContent = `From date: ${values.fromDate}`;
        p2.textContent = `To date: ${values.toDate}`;

        const article = document.createElement('article');
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p2);

        const li = document.createElement('li');
        li.classList.add('info-list');

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        vacation.appendChild(li);

        toggleBtns();
    }

    function edit(e) {
        e.preventDefault();
        vacation.innerHTML = '';

        name.value = values.name;
        last.value = values.last;
        fromDate.value = values.fromDate;
        toDate.value = values.toDate;

        toggleBtns();
    }

    function cont(e) {
        e.preventDefault();

        vacation.innerHTML = '';

        const confirmBtn = createBtn('Confirm', 'confirm-btn', conf);
        const cancelBtn = createBtn('Cancel', 'cancel-btn', cancel);
        const li = document.createElement('li');
        li.classList.add('vacation-content');

        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p2 = document.createElement('p');

        h3.textContent = `Name: ${values.name} ${values.last}`;
        p.textContent = `From date: ${values.fromDate}`;
        p2.textContent = `To date: ${values.toDate}`;

        const article = document.createElement('article');
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p2);

        li.appendChild(article);
        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);
        confirm.appendChild(li);
    }

    function conf(e) {
        e.preventDefault();

        confirm.innerHTML = '';
        toggleBtns();
        status.textContent = 'Vacation Requested';
        status.classList.add('vacation-confirmed');
    }

    function cancel(e) {
        e.preventDefault();

        confirm.innerHTML = '';
        toggleBtns();
        status.textContent = 'Cancelled Vacation';
        status.classList.add('vacation-cancelled');
    }

    function reload(e) {
        window.location.reload();
    }

    function clearInputs() {
        inputs.map(input => input.value = '');
    }

    function toggleBtns() {
        btn.disabled = !btn.disabled;
    }

    function createBtn(text, className, handler) {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.classList.add(className);
        btn.addEventListener('click', handler);
        return btn;
    }
}




