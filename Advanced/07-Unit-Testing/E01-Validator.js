function validate(input) {

    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    const regexUri = /^[\w.*]+$/g;
    const regexMes = /^[^<>&'"\\]*$/g;

    if (!input.method || !(methods.includes(input.method))) {
        throw new Error(`Invalid request header: Invalid Method`);
    } else if (!input.uri || !(regexUri.test(input.uri))) {
        throw new Error(`Invalid request header: Invalid URI`);
    } else if (!input.version || !(versions.includes(input.version))) {
        throw new Error(`Invalid request header: Invalid Version`);
    } else if (input.message === undefined) {
        throw new Error(`Invalid request header: Invalid Message`);
    } else if (!(regexMes.test(input.message))) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return input;

}
validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
