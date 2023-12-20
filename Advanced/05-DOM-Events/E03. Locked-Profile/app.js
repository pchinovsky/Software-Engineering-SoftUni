function lockedProfile() {

    const div = document.querySelector('div');
    div.addEventListener('click', reveal);

    function reveal(e) {
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