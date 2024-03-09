function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/forecaster/';
    const input = document.getElementById('location');
    const btn = document.getElementById('submit');
    const currentElem = document.getElementById('current');
    const upcomingElem = document.getElementById('upcoming');

    btn.addEventListener('click', forecast);

    async function forecast() {
        try {
            const res = await fetch(url + 'locations', { method: 'GET' });
            const data = await res.json();
            const code = data.find(obj => obj.name === input.value).code;
            console.log(code);
            document.getElementById('forecast').style.display = 'block';

            await current(code);
            await upcoming(code);

        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }

    async function current(code) {
        try {
            const res = await fetch(url + 'today/' + code, { method: 'GET' });
            const data = await res.json();

            currentElem.innerHTML = `
            <div class="label">Current conditions</div>
                <div class="forecasts">
                    <span class="condition symbol">${symbol(data.forecast.condition)}</span>
                    <span class="condition">
                        <span class="forecast-data">${data.name}</span>
                        <span class="forecast-data">${data.forecast.low}&deg;/${data.forecast.high}&deg;</span>
                        <span class="forecast-data">${data.forecast.condition}</span>
                    </span>
                </div>
            </div>
            `
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }

    async function upcoming(code) {
        try {
            const res = await fetch(url + 'upcoming/' + code, { method: 'GET' });
            const data = await res.json();

            upcomingElem.innerHTML = `
            <div class="label">Three-day forecast</div>
                <div class="forecast-info">
                    ${data.forecast.map(day => daily(day)).join('')}
                </div>
            </div>
            `

            function daily(day) {
                return `
                <span class="upcoming">
                    <span class="symbol">${symbol(day.condition)}</span>
                    <span class="forecast-data">${day.low}&deg;/${day.high}&deg;</span>
                    <span class="forecast-data">${day.condition}</span>
                </span class="upcoming">
                `
            }
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }

    function symbol(cond) {
        const codes = {
            Sunny: '&#x2600;',
            'Partly sunny': '&#x26C5;',
            Overcast: '&#x2601;',
            Rain: '&#x2614;',
        }
        return codes[cond];
    }
}

attachEvents();