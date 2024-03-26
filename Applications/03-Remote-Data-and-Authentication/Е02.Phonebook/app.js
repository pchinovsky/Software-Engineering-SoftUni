function attachEvents() {

    const url = 'http://localhost:3030/jsonstore/phonebook';
    const btnLoad = document.getElementById('btnLoad');
    const btnCre = document.getElementById('btnCreate');
    const phonebook = document.getElementById('phonebook');
    const personEl = document.getElementById('person');
    const phoneEl = document.getElementById('phone');
    btnLoad.addEventListener('click', onload);
    btnCre.addEventListener('click', onCre);
    phonebook.addEventListener('click', onDel);

    async function onload() {
        try {
            const res = await fetch(url, { method: 'GET' });
            const data = await res.json();
            phonebook.innerHTML = '';
            for (const person in data) {
                const li = document.createElement('li');
                const btnDel = document.createElement('button');
                btnDel.textContent = 'Delete';
                btnDel.id = data[person]._id;
                li.textContent = `${data[person].person}: ${data[person].phone}`;
                li.appendChild(btnDel);
                phonebook.appendChild(li);
            }
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }

    async function onDel(e) {
        if (e.target.tagName !== 'BUTTON') return;
        const id = e.target.id;
        try {
            e.target.parentElement.remove();
            await fetch(url + `/${id}`, { method: 'DELETE' });
            phonebook.innerHTML = '';
            onload();
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }

    async function onCre() {
        try {
            const person = personEl.value;
            const phone = phoneEl.value;
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ person, phone })
            });
            personEl.value = '';
            phoneEl.value = '';
            phonebook.innerHTML = '';
            onload();
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }
}
window.addEventListener('DOMContentLoaded', attachEvents);
