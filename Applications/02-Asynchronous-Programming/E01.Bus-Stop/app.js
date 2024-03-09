function getInfo() {
    const url = 'http://localhost:3030/jsonstore/bus/businfo/';

    const checkBtn = document.getElementById('stopId');
    const stop = document.getElementById('stopName');
    const list = document.getElementById('buses');

    const validIds = ['1287', '1308', '1327', '2334'];

    if (!validIds.includes(checkBtn.value)) {
        stop.textContent = 'Error';
        list.innerHTML = '';
        return;
    }

    fetch(url + checkBtn.value, { method: 'GET' })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        if ((Array.isArray(data) && data.length === 0) ||
            (Object.keys(data).length === 0)) {
            throw new Error(`No content`);
        }
        console.log(data);
        stop.textContent = data.name;
        for (const bus in data.buses) {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            list.appendChild(li);
        }
    })
    .catch(err => {
        stop.textContent = err.message;
    });
}