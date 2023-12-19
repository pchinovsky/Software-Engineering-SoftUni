function toggle() {

    const button = document.querySelector('.button');
    const p = document.getElementById('extra');

    if (button.textContent === 'More') {
        p.style.display = 'block';
        button.textContent = 'Less';
    } else if (button.textContent === 'Less') {
        p.style.display = 'none';
        button.textContent = 'More';
    }

}

