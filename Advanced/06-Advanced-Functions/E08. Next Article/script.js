function getArticleGenerator(articles) {

    const content = document.getElementById('content');

    return function () {
        let article = document.createElement('article');
        if (articles.length !== 0) {
            article.textContent = articles.shift();
            content.appendChild(article);
        }
    }
}

