function focused() {

    let inputs = document.getElementsByTagName('input');

    Array.from(inputs).forEach(inp => {
        inp.addEventListener('focus', inputFocus);
        inp.addEventListener('blur', inputBlur);
    });

    function inputFocus(e) {
        let section = e.target.parentNode;
        section.className = 'focused';
    }

    function inputBlur(e) {
     let section = e.target.parentNode;
        section.className = '';
    }

}