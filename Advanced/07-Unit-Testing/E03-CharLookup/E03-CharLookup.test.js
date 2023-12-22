let expect = require('chai').expect;
const { lookupChar } = require('./E03-CharLookup.js');

describe('', () => {
    it('returns undefined for incomplete input', () => {
        expect(lookupChar(1)).equal(undefined, 'Incomplete input');
        expect(lookupChar('str')).equal(undefined, 'Incomplete input');
    })
    it('returns undefined for incorrect data type', () => {
        expect(lookupChar(1, 'str')).equal(undefined, 'Incorrect input type');
        expect(lookupChar('str', 2.5)).equal(undefined, 'Incorrect index type');
        expect(lookupChar((a, b) => a + b), 1).equal(undefined, 'Incorrect input type');
        expect(lookupChar(true, 1)).equal(undefined, 'Incorrect input type');
        expect(lookupChar(['str'], 1)).equal(undefined, 'Incorrect input type');
        expect(lookupChar({ str: 'str' }, 1)).equal(undefined, 'Incorrect input type');
    })
    it('returns "Incorrect index" for index out of range', () => {
        expect(lookupChar('str', -3)).equal('Incorrect index');
        expect(lookupChar('str', 4)).equal('Incorrect index');
    })
    it('returns char for correct input', () => {
        expect(lookupChar('str', 0)).equal('s');
        expect(lookupChar('str', 1)).equal('t');
        expect(lookupChar('str', 2)).equal('r');
    })
})