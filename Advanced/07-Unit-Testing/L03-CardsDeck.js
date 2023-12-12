function printDeck(deck) {

    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    function printCard(str1, str2) {
        return {
            face: str1,
            suit: str2,
            toString() {
                return this.face + suits[str2];
            }
        }
    }

    let cards = [];

    for (const card of deck) {
        let els = card.split('');
        let suit = els.pop();
        let face = els.join('');
        let cardPrint = printCard(face, suit);
        cards.push(cardPrint.toString());

        if (!(validFaces.includes(face)) || !(suits[suit])) {
            console.log(`Invalid card: ${face + suit}`);
            return;
        }
    }

    console.log(cards.join(' '));

}
