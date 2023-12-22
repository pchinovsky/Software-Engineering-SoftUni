function validate() {

    const form = document.getElementById('registerForm');
    const valid = document.getElementById('valid');
    const inputPass = document.getElementById('password');
    const inputPassConfirm = document.getElementById('confirm-password');
    const companyInfo = document.getElementById('companyInfo');
    const checkCompany = document.getElementById('company');

    checkCompany.addEventListener('change', onToggle);
    form.addEventListener('submit', checkValid);

    let isValid = true;

    function onToggle() {
        companyInfo.style.display = checkCompany.checked ? 'block' : 'none';
    }

    const validations = {
        username: function (input) {
            const reg = /^[a-zA-Z0-9]+$/;

            if ((input.value.length < 3 || input.value.length > 20) ||
                (!(reg.test(input.value)))) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }

        },
        email: function(input) {
            const reg = /^.*@.*\..*$/g;

            if (!(reg.test(input.value))) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        },
        password: checkPass,
        'confirm-password': checkPass,
        companyNumber: function(input) {
            if (!checkCompany.checked) {
                return;
            }
            const compVal = +input.value;
            if (compVal < 1000 || compVal > 9999 || isNaN(compVal)) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        }
    }

    function checkValid(e) {
        e.preventDefault();

        isValid = true;

        for (const valId in validations) {
            const input = document.getElementById(valId);
            validations[valId](input);
        }

        if (inputPass.value !== inputPassConfirm.value) {
            inputPass.style.borderColor = 'red';
            inputPassConfirm.style.borderColor = 'red';
            isValid = false;
        } 

        if (isValid) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';

        }

    }

    function checkPass(input) {
        const reg = /\w+/;
        
        if ((input.value.length < 5 || input.value.length > 15) ||
            (!(reg.test(input.value)))) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    }

}
