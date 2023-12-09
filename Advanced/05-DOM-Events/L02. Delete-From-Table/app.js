function deleteByEmail() {
    let input = document.getElementsByName('email')[0].value;
    let mails = document.querySelectorAll('#customers tr td:nth-child(2n)');

    for (const mail of mails) {
        let result = document.getElementById('result');

        if (mail.textContent === input) {
            let row = mail.parentNode;
            row.parentNode.removeChild(row);
            result.textContent = 'Deleted.';
            break;
        } else {
            result.textContent = 'Not found.';
        }
    }

}