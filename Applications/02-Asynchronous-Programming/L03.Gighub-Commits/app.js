function loadCommits() {

    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const list = document.getElementById('commits');

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url, {method: 'GET'})
    .then(res => {
        if(!res.ok) {
            throw new Error(`Error: ${res.status} (Not Found)`);
        }
        return res.json();
    })
    .then(data => {
        if (data.length === 0) {
            throw new Error('No content');
        }
        data.forEach(comm => {
            const li = document.createElement('li');
            li.textContent = `${comm.commit.author.name}: ${comm.commit.message}`
            list.appendChild(li);
        })
    })
    .catch(err => {
        list.textContent = err.message;
    })

}