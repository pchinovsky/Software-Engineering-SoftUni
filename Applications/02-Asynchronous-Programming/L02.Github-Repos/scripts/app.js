function loadRepos() {

	const list = document.getElementById('repos');
	const input = document.getElementById('username');
	const username = input.value;

	list.innerHTML = '';
	const urlBase = 'https://api.github.com/users';
	let urlFull = urlBase + '/' + username + '/repos';

	fetch(urlFull, { method: 'GET' })
		.then(res => {
			if (!res.ok) {
				throw new Error(`Error! Status: ${res.status}`);
			}
			return res.json();
		})
		.then(data => {
			if (data.length === 0) {
				throw new Error(`No user content`);
			}
			data.forEach(repo => {
				const li = document.createElement('li');
				const link = document.createElement('a');
				link.textContent = repo.full_name;
				link.href = repo.html_url;
				li.appendChild(link);
				list.appendChild(li);
			})
		})
		.catch(err => {
			list.textContent = err.message;
		});

}