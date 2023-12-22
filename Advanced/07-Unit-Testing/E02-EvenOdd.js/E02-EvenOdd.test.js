let expect = require('chai').expect;
const { isOddOrEven } = require('./E02-EvenOdd.js');

describe('', () => {
    it('returns undefined for incorrect data type', () => {
        expect(isOddOrEven(1)).equal(undefined, 'Input must be a string');
        expect(isOddOrEven((a, b) => a + b)).equal(undefined, 'Input must be a string');
        expect(isOddOrEven(true)).equal(undefined, 'Input must be a string');
        expect(isOddOrEven(['str'])).equal(undefined, 'Input must be a string');
        expect(isOddOrEven({ str: 'str' })).equal(undefined, 'Input must be a string');
    })
    it('returns "even" for even str', () => {
        expect(isOddOrEven('nope')).equal('even');
        expect(isOddOrEven('1234')).equal('even');
    })
    it('returns "odd" for odd str', () => {
        expect(isOddOrEven('yep')).equal('odd');
        expect(isOddOrEven('123')).equal('odd');
    })
    it('returns "odd" / "even" for the first str of several', () => {
        expect(isOddOrEven('odd', 'even', 'yep')).equal('odd');
        expect(isOddOrEven('even', 'even', 'yep')).equal('even');
    })
})