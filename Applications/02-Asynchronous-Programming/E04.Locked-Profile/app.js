function lockedProfile() {

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.querySelector('main');
    main.addEventListener('click', toggle);

    buildProfiles();

    async function getProfiles() {
        const res = await fetch(url, { method: 'GET' });
        const data = await res.json();
        return data;
    }

    async function buildProfiles() {
        main.innerHTML = '';
        const data = await getProfiles();
        console.log(data);
        for (const profile in data) {
            const div = document.createElement('div');
            div.classList.add('profile');
            div.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${data[profile].username}" disabled readonly />
				<div class="user1Username" style="display: none;">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${data[profile].email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="${data[profile].age}" disabled readonly />
				</div>

				<button>Show more</button>
            `
            main.appendChild(div);
            div.querySelector('input[type="radio"][value="lock"]').checked = true;

        }


    }


    function toggle(e) {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }
        let div = e.target.parentNode;

        if (div.querySelector('input').checked === false) {
            let display = div.querySelector('div').style.display;
            display = display === 'block' ? 'none' : 'block';
            div.querySelector('div').style.display = display;
            e.target.textContent = e.target.textContent === 'Show more' ? 'Hide it' : 'Show more';
        }
    }
}