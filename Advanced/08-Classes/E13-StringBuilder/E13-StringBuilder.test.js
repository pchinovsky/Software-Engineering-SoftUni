let expect = require('chai').expect;
const { assert } = require('chai');
const { StringBuilder } = require('./E13.js');

describe('StringBuilder inputs', () => {
    let str;
    beforeEach(() => {
        str = new StringBuilder('bla');
    })

    it('not throw error for correct input', () => {
        expect(() => str.append('bla')).not.to.throw();
        expect(() => str.append('1')).not.to.throw();
        expect(() => str.prepend('bla')).not.to.throw();
        expect(() => str.insertAt('bla', 1)).not.to.throw();
        expect(() => str.insertAt('bla')).not.to.throw();
        expect(() => str.remove(1, 1)).not.to.throw();
        expect(() => str.remove(0, 0)).not.to.throw();
        expect(() => str.remove(1)).not.to.throw();
        expect(() => str.remove('bla')).not.to.throw();
        expect(() => str.remove('bla', 1)).not.to.throw();
        expect(() => str.remove([])).not.to.throw();
        expect(() => str.remove({})).not.to.throw();
        expect(() => str.remove(null)).not.to.throw();
        expect(() => str.remove(undefined)).not.to.throw();
        expect(() => str.remove(false)).not.to.throw();
        expect(() => str.toString()).not.to.throw();
    })

    it('not throw error for correct input', () => {
        expect(() => new StringBuilder('bla')).not.to.throw();
        expect(() => new StringBuilder('1')).not.to.throw();
        expect(() => new StringBuilder('')).not.to.throw();
        expect(() => new StringBuilder()).not.to.throw();
        expect(() => new StringBuilder(undefined)).not.to.throw();
    })

    it('not throw error for correct input', () => {
        expect(str._stringArray.join('')).equal('bla');
        expect(str.toString()).equal('bla');
        expect(str).to.have.property('_stringArray').with.lengthOf(3);
    })
    it('not throw error for correct input', () => {
        const str1 = new StringBuilder();
        expect(str1.toString()).equal('');
    })

    it('correctly defined as class', () => {
        expect(StringBuilder).to.exist;
        expect(typeof StringBuilder).equal('function', 'StringBuilder must be a class');
        expect(typeof new StringBuilder()).equal('object', 'StringBuilder must be a class');
        expect(str instanceof StringBuilder).equal(true, 'StringBuilder must be a class');
    })

    it('has full functionality', () => {
        assert.isFunction(StringBuilder.prototype.append);
        assert.isFunction(StringBuilder.prototype.prepend);
        assert.isFunction(StringBuilder.prototype.remove);
        assert.isFunction(StringBuilder.prototype.insertAt);
        assert.isFunction(StringBuilder.prototype.toString);
    })

    it('throws error for incorrect input', () => {
        expect(() => new StringBuilder(1)).to.throw('Argument must be a string');
        expect(() => new StringBuilder(1, 1)).to.throw('Argument must be a string');
        expect(() => new StringBuilder([])).to.throw('Argument must be a string');
        expect(() => new StringBuilder({})).to.throw('Argument must be a string');
        expect(() => new StringBuilder(['bla'])).to.throw('Argument must be a string');
        expect(() => new StringBuilder({ 'bla': 'bla' })).to.throw('Argument must be a string');
        expect(() => new StringBuilder((a, b) => a + b)).to.throw('Argument must be a string');
        expect(() => new StringBuilder(null)).to.throw('Argument must be a string');
        expect(() => new StringBuilder(NaN)).to.throw('Argument must be a string');
        expect(() => new StringBuilder(false)).to.throw('Argument must be a string');
        expect(() => new StringBuilder(bla)).to.throw('bla is not defined');

    })

    it('throws error for incorrect append arg', () => {
        expect(() => str.append(bla)).to.throw('bla is not defined');
        expect(() => str.append(1)).to.throw('Argument must be a string');
        expect(() => str.append()).to.throw('Argument must be a string');
        expect(() => str.append([])).to.throw('Argument must be a string');
        expect(() => str.append({})).to.throw('Argument must be a string');
        expect(() => str.append(['bla'])).to.throw('Argument must be a string');
        expect(() => str.append({ 'bla': 'bla' })).to.throw('Argument must be a string');
        expect(() => str.append(null)).to.throw('Argument must be a string');
        expect(() => str.append(undefined)).to.throw('Argument must be a string');
        expect(() => str.append(NaN)).to.throw('Argument must be a string');
        expect(() => str.append(false)).to.throw('Argument must be a string');
    })

    it('throws error for incorrect prepend arg', () => {
        expect(() => str.prepend(bla)).to.throw('bla is not defined');
        expect(() => str.prepend(1)).to.throw('Argument must be a string');
        expect(() => str.prepend()).to.throw('Argument must be a string');
        expect(() => str.prepend([])).to.throw('Argument must be a string');
        expect(() => str.prepend({})).to.throw('Argument must be a string');
        expect(() => str.prepend(['bla'])).to.throw('Argument must be a string');
        expect(() => str.prepend({ 'bla': 'bla' })).to.throw('Argument must be a string');
        expect(() => str.prepend(null)).to.throw('Argument must be a string');
        expect(() => str.prepend(undefined)).to.throw('Argument must be a string');
        expect(() => str.prepend(NaN)).to.throw('Argument must be a string');
        expect(() => str.prepend(false)).to.throw('Argument must be a string');
    })

    it('throws error for incorrect remove arg', () => {
        expect(() => str.remove(bla)).to.throw('bla is not defined');
    })

    it('throws error for incorrect insertAt arg', () => {
        expect(() => str.insertAt(bla)).to.throw('bla is not defined');
        expect(() => str.insertAt(1)).to.throw('Argument must be a string');
        expect(() => str.insertAt(1, 1)).to.throw('Argument must be a string');
        expect(() => str.insertAt()).to.throw('Argument must be a string');
        expect(() => str.insertAt(1, 'bla')).to.throw('Argument must be a string');
        expect(() => str.insertAt([], 1)).to.throw('Argument must be a string');
        expect(() => str.insertAt({}, 1)).to.throw('Argument must be a string');
        expect(() => str.insertAt(['bla'], 1)).to.throw('Argument must be a string');
        expect(() => str.insertAt({ 'bla': 'bla' }, 1)).to.throw('Argument must be a string');
        expect(() => str.insertAt(null, 1)).to.throw('Argument must be a string');
        expect(() => str.insertAt(undefined, 1)).to.throw('Argument must be a string');
        expect(() => str.insertAt(NaN, 1)).to.throw('Argument must be a string');
        expect(() => str.insertAt(false, 1)).to.throw('Argument must be a string');
    })
})

describe('StringBuilder toString', () => {
    let str;
    beforeEach(() => {
        str = new StringBuilder('bla');
    })

    it('returns correct output for toString method', () => {
        str.append('bla')
        expect(str.toString()).equal('blabla', 'toString incorrect output');
        expect(str.toString().length).equal(6, 'toString incorrect output');
        expect(str._stringArray[3]).equal('b', 'toString incorrect output');
    })

    it('returns correct output for toString method', () => {
        str.prepend('lab')
        expect(str.toString()).equal('labbla', 'toString incorrect output');
        expect(str.toString().length).equal(6, 'toString incorrect output');
        expect(str._stringArray[0]).equal('l', 'toString incorrect output');

    })

    it('returns correct output for toString method', () => {
        str.remove(1, 1)
        expect(str.toString()).equal('ba', 'toString incorrect output');
        expect(str.toString().length).equal(2, 'toString incorrect output');
        expect(str._stringArray[1]).equal('a', 'toString incorrect output');

    })
    it('returns correct output for toString method', () => {
        str.remove(0, 1)
        expect(str.toString()).equal('la', 'toString incorrect output');
        expect(str.toString().length).equal(2, 'toString incorrect output');
        expect(str._stringArray[1]).equal('a', 'toString incorrect output');
        
    })

    it('returns correct output for toString method', () => {
        str.insertAt('ba', 1)
        expect(str.toString()).equal('bbala', 'toString incorrect output');
        expect(str.toString().length).equal(5, 'toString incorrect output');
        expect(str._stringArray[1]).equal('b', 'toString incorrect output');

    })
    it('returns correct output for toString method', () => {
        str.insertAt('', 1)
        expect(str.toString()).equal('bla', 'toString incorrect output');
        expect(str.toString().length).equal(3, 'toString incorrect output');
        expect(str._stringArray[1]).equal('l', 'toString incorrect output');

    })

    it('returns correct output for toString method', () => {
        str.append('bla');
        str.prepend('lab');
        expect(str.toString()).equal('labblabla', 'toString incorrect output');
        expect(str.toString().length).equal(9, 'toString incorrect output');

    })

    it('returns correct output for toString method', () => {
        str.remove(1, 1);
        str.insertAt('ba', 1);
        expect(str.toString()).equal('bbaa', 'toString incorrect output');
        expect(str.toString().length).equal(4, 'toString incorrect output');
    })

    it('returns correct output for toString method', () => {
        str.append('bla');
        str.remove(1, 1);
        expect(str.toString()).equal('babla', 'toString incorrect output');
        expect(str.toString().length).equal(5, 'toString incorrect output');
    })

    it('returns correct output for toString method', () => {
        str.prepend('lab');
        str.insertAt('ba', 1);
        expect(str.toString()).equal('lbaabbla', 'toString incorrect output');
        expect(str.toString().length).equal(8, 'toString incorrect output');

    })

    it('returns correct output for toString method', () => {
        str.append('bla');
        str.prepend('lab');
        str.remove(1, 1);
        str.insertAt('ba', 1);
        expect(str.toString()).equal('lbabblabla', 'toString incorrect output');
        expect(str.toString().length).equal(10, 'toString incorrect output');

    })

})

