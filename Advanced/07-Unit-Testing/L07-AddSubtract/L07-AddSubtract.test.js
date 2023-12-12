let expect = require('chai').expect;
const { createCalculator } = require('./L07-AddSubtract.js');

describe('test createCalculator', () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    })

    it('returns num for add num', () => {
        calc.add(1)
        expect(calc.get()).equal(1)
    })
    it('returns neg num for sub num', () => {
        calc.subtract(1)
        expect(calc.get()).equal(-1)
    })
    it('returns num for add num as str', () => {
        calc.add('1')
        expect(calc.get()).equal(1)
    })
    it('returns neg num for sub num as str', () => {
        calc.subtract('1')
        expect(calc.get()).equal(-1)
    })
    it('returns 0 for direct call', () => {
        expect(calc.get()).equal(0)
    })
    it('returns neg num for add neg num', () => {
        calc.add(-1)
        expect(calc.get()).equal(-1)
    })
    it('returns num for sub neg num', () => {
        calc.subtract(-1)
        expect(calc.get()).equal(1)
    })
    it('returns NaN for add str', () => {
        calc.add('a')
        expect(isNaN(calc.get())).to.be.true
    })
    it('returns NaN for sub str', () => {
        calc.subtract('a')
        expect(isNaN(calc.get())).to.be.true
    })
    it('returns NaN for arr', () => {
        calc.add([1, 2, 3])
        expect(isNaN(calc.get())).to.be.true
    })
    it('returns 0 for add and subs same nums', () => {
        calc.add(1);
        calc.subtract(1)
        expect(calc.get()).equal(0)
    })
    it('returns 0 for add and subs same neg nums', () => {
        calc.add(-1);
        calc.subtract(-1)
        expect(calc.get()).equal(0)
    })
    it('returns 0 for add and subs same nums as strs', () => {
        calc.add('1');
        calc.subtract('1')
        expect(calc.get()).equal(0)
    })
    it('returns 0 for add and subs same nums, one num, one num as str', () => {
        calc.add('1');
        calc.subtract(1)
        expect(calc.get()).equal(0)
    })
    it('returns sum when add two nums', () => {
        calc.add(1);
        calc.add(1)
        expect(calc.get()).equal(2)
    })
    it('returns 0 when add 0', () => {
        calc.add(0);
        calc.add(0)
        expect(calc.get()).equal(0)
    })
    it('returns neg num when subs two pos nums', () => {
        calc.subtract(1);
        calc.subtract(1)
        expect(calc.get()).equal(-2)
    })
    it('returns NaN for add and subs strs', () => {
        calc.add('a')
        calc.subtract('b')
        expect(isNaN(calc.get())).to.be.true
    })
    it('returns NaN for add str and subs num', () => {
        calc.add('a')
        calc.subtract('1')
        expect(isNaN(calc.get())).to.be.true
    })
    it('returns NaN for add num and subs str', () => {
        calc.add('1')
        calc.subtract('b')
        expect(isNaN(calc.get())).to.be.true
    })
    it('returns 0 for direct call with arg', () => {
        expect(calc.get(0)).equal(0)
        expect(calc.get(1)).equal(0)
        expect(calc.get(-1)).equal(0)
        expect(calc.get('1')).equal(0)
        expect(calc.get('a')).equal(0)
    })
    it('has all methods', () => {
        expect(calc).to.have.own.property('add')
        expect(calc).to.have.own.property('subtract')
        expect(calc).to.have.own.property('get')
    })


})
