function solve() {
    let current = 'depot';
    let next;
    const infoBox = document.getElementById('info').firstElementChild;
    const url = 'http://localhost:3030/jsonstore/bus/schedule/';

    async function depart() {
        try {
            const res = await fetch(url + current, { method: 'GET' });
            const data = await res.json();
            infoBox.textContent = `Next stop ${data.name}`;
            next = data.next;
            toggleBtns();
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
            infoBox.textContent = 'Error';
            toggleBtns(true);
        }
    }

    async function arrive() {
        try {
            const res = await fetch(url + current, { method: 'GET' });
            const data = await res.json();
            infoBox.textContent = `Arriving at ${data.name}`;
            current = next;
            toggleBtns();
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
            infoBox.textContent = 'Error';
            toggleBtns(true);
        }
    }

    return {
        depart,
        arrive
    };

    function toggleBtns(disable) {
        ['depart', 'arrive'].forEach(id => document.getElementById(id).disabled = disable !== undefined ? disable : !document.getElementById(id).disabled);
    }

}

let result = solve();