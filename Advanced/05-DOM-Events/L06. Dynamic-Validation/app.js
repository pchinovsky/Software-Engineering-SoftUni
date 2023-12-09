function validate() {

    let regex = /\w+@\w+\.\w+/;

    let inputField = document.getElementById('email');
    inputField.addEventListener('change', validateMail);

    function validateMail(e) {
        let inputText = inputField.value;

        if (regex.test(inputText)) {
            e.target.className = '';
        } else {
            e.target.className = 'error';
        }

    }

}