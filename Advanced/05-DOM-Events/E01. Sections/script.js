function create(words) {

    let content = document.getElementById('content');

    for (const word of words) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = word;
        div.appendChild(p);
        p.style.display = 'none';
        div.addEventListener('click', reveal);
        content.appendChild(div);
    }

    function reveal(e) {
        e.target.firstElementChild.style.display = 'block';
    }

}