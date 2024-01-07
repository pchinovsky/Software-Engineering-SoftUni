function app() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';
    const url2 = 'http://localhost:3030/jsonstore/cookbook/details';
    const main = document.getElementsByTagName('main')[0];
    main.replaceChildren();

    fetch(url, { method: 'GET' })
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
            for (const recipe in data) {
                const preview = document.createElement('article');
                const img = document.createElement('img');
                preview.classList.add('preview');
                const title = document.createElement('h2');
                const div1 = document.createElement('div');
                div1.classList.add('title');
                const div2 = document.createElement('div');
                div2.classList.add('small');
                const div3 = document.createElement('div');
                div3.classList.add('band');
                const div4 = document.createElement('div');
                div4.classList.add('description');

                title.textContent = data[recipe].name;
                img.src = data[recipe].img;
                div1.appendChild(title);
                div2.appendChild(img);
                preview.appendChild(div1);
                preview.appendChild(div2);

                preview.addEventListener('click', expand);

                main.appendChild(preview);
            }
        })
        .catch(err => {
            main.textContent = err.message;
        });

    function expand(e) {
        const closest = e.target.closest('article.preview');
        const id = `0${(closest.firstElementChild.textContent).split(' ')[1]}`;
        const url = url2 + '/' + id;
     
        document.querySelectorAll('.expand').forEach(art => art.remove());

        fetch(url, { method: 'GET' })
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
                document.querySelectorAll('article.preview')
                .forEach(pr => {
                    pr.style.backgroundColor = '#CCCCCC';
                    pr.addEventListener('click', expand);
                })
                closest.style.backgroundColor = 'salmon';
                closest.removeEventListener('click', expand);

                const article = document.createElement('article');
                article.classList.add('expand');
                const img = document.createElement('img');
                const title = document.createElement('h2');
                const prep = document.createElement('h3');
                const ingreds = document.createElement('h3');
                const ul = document.createElement('ul');

                const div3 = document.createElement('div');
                div3.classList.add('band');
                const div5 = document.createElement('div');
                div5.classList.add('thumb');
                const div4 = document.createElement('div');
                div4.classList.add('description');
                const div2 = document.createElement('div');
                div2.classList.add('ingredients');

                title.textContent = data.name;
                prep.textContent = 'Preparation:';
                ingreds.textContent = 'Ingredients:';
                img.src = data.img;
                div5.appendChild(img);

                data.ingredients.forEach(ingr => {
                    const li = document.createElement('li');
                    li.textContent = ingr;
                    ul.appendChild(li);
                })

                article.appendChild(title);
                div3.appendChild(div5);
                div2.appendChild(ingreds);
                div2.appendChild(ul);
                div4.appendChild(prep);
                div3.appendChild(div2);

                data.steps.forEach(step => {
                    const p = document.createElement('p');
                    p.textContent = step;
                    div4.appendChild(p);
                })

                article.appendChild(div3);
                article.appendChild(div4);

                main.appendChild(article);
            })
            .catch(err => {
                main.textContent = err.message;
            });
    }
}
document.addEventListener('DOMContentLoaded', app);

