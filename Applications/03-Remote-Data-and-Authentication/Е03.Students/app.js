function onLoad() {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const form = document.getElementById('form');
    const tbody = document.querySelector('#results>tbody');

    form.addEventListener('submit', onCre);
    tableFill();

    async function onCre(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        try {
            await request(url, 'POST', { body: data });
            e.target.reset();
            tableFill();
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }

    async function tableFill() {
        try {
            const data = await request(url, 'GET');
            const frag = document.createDocumentFragment();

            for (const student in data) {
                const tr = document.createElement('tr');
                const thFirst = document.createElement('th');
                const thLast = document.createElement('th');
                const thNum = document.createElement('th');
                const thGrade = document.createElement('th');

                thFirst.textContent = data[student].firstName;
                thLast.textContent = data[student].lastName;
                thNum.textContent = data[student].facultyNumber;
                thGrade.textContent = data[student].grade;

                tr.appendChild(thFirst);
                tr.appendChild(thLast);
                tr.appendChild(thNum);
                tr.appendChild(thGrade);

                frag.appendChild(tr);
            }
            tbody.replaceChildren(frag);
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }

    async function request(url, method, options = {}) {
        const defaultHeaders = { 'Content-Type': 'application/json' };
        const ops = {
            method: method,
            headers: options.headers || defaultHeaders,
        };
        if (method !== 'GET' && options.body) ops.body = JSON.stringify(options.body);
        try {
            const res = await fetch(url, ops);
            if (res.status !== 200) {
                throw new Error(`${res.status} ${res.statusText}`);
            }
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }
}
window.addEventListener('DOMContentLoaded', onLoad);
