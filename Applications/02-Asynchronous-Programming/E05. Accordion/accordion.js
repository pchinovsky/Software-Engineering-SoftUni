function solution() {

    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const urlArticle = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    let section = document.getElementById('main');

    section.addEventListener('click', toggle);

    makeArticlePreview();

    async function toggle(e) {

        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        const button = e.target;
        const id = button.id;
        const data = await getArticleById(id);
        const div = document.querySelector(`div.extra[id="${id}"]`);
        const p = div.querySelector(`p`);
        p.textContent = data.content;

        if (button.textContent === 'More') {
            div.style.display = 'block';
            button.textContent = 'Less';
        } else if (button.textContent === 'Less') {
            div.style.display = 'none';
            button.textContent = 'More';
        }

    }

    async function makeArticlePreview() {
        let articles = await getArticles();

        articles.forEach(article => {
            let div = document.createElement('div');
            let title = article.title;
            let id = article._id;

            div.innerHTML =
                `<div class="accordion">
                <div class="head">
                    <span>${title}</span>
                    <button class="button" id=${id}>More</button>
                </div>
            <div class="extra" id=${id}>
                <p>${title}</p>
            </div>
            </div>`

            section.appendChild(div);
        })

    }

    async function getArticles() {
        const res = await fetch(url, { method: 'GET' });
        const data = res.json();
        return data;
    }

    async function getArticleById(id) {
        const res = await fetch(urlArticle + id, { method: 'GET' });
        const data = res.json();
        return data;
    }


}
solution();

