function encodeAndDecodeMessages() {

    const text1 = document.getElementsByTagName('textarea')[0];
    const text2 = document.getElementsByTagName('textarea')[1];
    const encodeText = document.getElementsByTagName('button')[0];
    const decodeText = document.getElementsByTagName('button')[1];

    encodeText.addEventListener('click', encode);
    decodeText.addEventListener('click', decode);

    function encode() {
        let encoded = text1.value.split('').map(el => String.fromCharCode(el.charCodeAt() + 1)).join('');
        text2.textContent = encoded;
        text1.value = '';
    }
    
    function decode() {
        let mess = text2.textContent;
        let decoded = mess.split('').map(el => String.fromCharCode(el.charCodeAt() - 1)).join('');
        text2.textContent = decoded;
    }
}