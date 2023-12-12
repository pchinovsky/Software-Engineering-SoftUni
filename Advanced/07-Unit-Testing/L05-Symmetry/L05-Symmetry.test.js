let expect = require('chai').expect;
let { isSymmetric } = require('./L05-Symmetry.js');

describe('', () => {
    it('returns false for incorrect input type string', () => {
        expect(isSymmetric('text')).to.be.false
    })
    it('returns false for incorrect input type number', () => {
        expect(isSymmetric(2)).to.be.false
    })
    it('returns false for incorrect input type number as string', () => {
        expect(isSymmetric('2')).to.be.false
    })
    it('returns false for asymmetric array', () => {
        expect(isSymmetric(['a', 'b', 'c', 'c'])).to.be.false
    })
    it('returns false for asymmetric array numbers as strings', () => {
        expect(isSymmetric(['1', '2', '3', '1'])).to.be.false
    })
    it('returns true for symmetric strings array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true
    })
    it('returns true for symmetric odd array', () => {
        expect(isSymmetric(['a', 'b', 'a'])).to.be.true
    })
    it('returns false for incorrect input type', () => {
        expect(isSymmetric(['1', '2', '2', '1'])).to.be.true
    })
    it('returns true for symmetric numbers array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true
    })
    it('returns true for symmetric odd array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true
    })
    it('returns true for one element array', () => {
        expect(isSymmetric(['a'])).to.be.true
    })
    it('returns false for incorrect input type', () => {
        expect(isSymmetric([2])).to.be.true
    })
    it('returns true for symmetric mixed array ', () => {
        expect(isSymmetric([1, 'a', 'a', 1])).to.be.true
    })
    it('returns true for symmetric mixed odd array', () => {
        expect(isSymmetric([1, 'a', 1])).to.be.true
    })
    it('returns false for symmetric mixed odd array', () => {
        expect(isSymmetric([1, 'b', '1'])).to.be.false
    })
    it('returns false for asymmetric numbers array ', () => {
        expect(isSymmetric([1, 2, 3, 1])).to.be.false
    })
    it('returns false for asymmetric mixed array ', () => {
        expect(isSymmetric([1, 'a', 'b', 1])).to.be.false
    })
})