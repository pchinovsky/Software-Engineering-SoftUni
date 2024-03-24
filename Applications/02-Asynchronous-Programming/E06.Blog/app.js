function attachEvents() {
// made with the titleAndBody arr because tests were not made to work with dynamic url-s. 

    const urlPosts = 'http://localhost:3030/jsonstore/blog/posts';
    const urlComments = 'http://localhost:3030/jsonstore/blog/comments';

    const titleAndBody = [];

    const btnPosts = document.getElementById('btnLoadPosts');
    btnPosts.addEventListener('click', getPosts);
    const btnView = document.getElementById('btnViewPost');
    btnView.addEventListener('click', getComments);
    const ops = document.getElementById('posts');
    const comms = document.getElementById('post-comments');
    const title = document.getElementById('post-title');
    const body = document.getElementById('post-body');

    async function getPosts() {
        const res = await fetch(urlPosts, { method: 'GET' });
        const data = await res.json();
        for (const post in data) {
            const op = document.createElement('option');
            op.textContent = data[post].title;
            op.value = data[post].id;
            ops.appendChild(op);
            titleAndBody.push(data[post]);
        }
    }

    async function getComments() {
        const id = posts.value;
        const res = await fetch(urlComments, { method: 'GET' });
        const data = await res.json();
        const postData = titleAndBody.find(obj => obj.id === id);
        title.textContent = postData.title;
        body.textContent = postData.body;
        comms.innerHTML = '';
        for (const comment in data) {
            if (data[comment].postId === id) {
                const li = document.createElement('li');
                li.textContent = data[comment].text;
                li.id = data[comment].id;
                comms.appendChild(li);
            }
        }
    }
}

attachEvents();





