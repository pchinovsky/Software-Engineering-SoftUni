function passwordCheck(pass) {

    let flag = true;

    function length(a) {

        if (a.length < 6 || a.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            return flag = false;
        }
    }


    function chars(b) {

        for (let i = 0; i < b.length; i++) {
            let char = b[i].charCodeAt(0);

            if (!((char >= 48 && char <= 57) ||
                (char >= 65 && char <= 90) ||
                char >= 97 && char <= 122)) {
                console.log("Password must consist only of letters and digits");
                return flag = false;
            }
        }
    }


    function dig(c) {
        let arr = c.split("");
        let arrDig = arr.filter((x) => x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57);

        if (arrDig.length < 2) {
            console.log("Password must have at least 2 digits");
            return flag = false;
        }
    }

    length(pass);
    chars(pass);
    dig(pass);

    if (flag === true) {
        console.log("Password is valid");
    }

}
