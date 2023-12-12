function printCard(str1, str2) {

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    if (!(validFaces.includes(str1))) throw new Error('Error');

    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    return {
        face: str1,
        suit: str2,
        toString() {
            return this.face + suits[str2];
        }
    }

}
let card = printCard('1', 'S')
console.log(card.toString());
