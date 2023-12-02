function extract(input) {

    let split = input.split('\\');
    let file = split[split.length - 1];
    let ind = file.lastIndexOf('.');
    let fileName = file.substring(0, ind);
    let fileExtension = file.substring(ind + 1,);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}