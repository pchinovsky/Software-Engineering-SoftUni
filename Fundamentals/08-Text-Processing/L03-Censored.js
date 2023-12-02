function replace(str, remove) {

    let insert = "*".repeat(remove.length);

    while (str.includes(remove)) {
        str = str.replace(remove, insert);
    }

    console.log(str);

}