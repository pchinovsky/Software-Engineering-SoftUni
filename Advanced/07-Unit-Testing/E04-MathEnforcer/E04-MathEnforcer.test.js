let expect = require('chai').expect;
const { mathEnforcer } = require('./E04-MathEnforcer.js');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('returns undefined for empty input', () => {
            expect(mathEnforcer.addFive()).equal(undefined, 'Missing input');
        })
        it('returns undefined for incorrect data type', () => {
            expect(mathEnforcer.addFive('str')).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.addFive((a, b) => a + b)).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.addFive(true)).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.addFive(['str'])).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.addFive({ str: 'str' })).equal(undefined, 'Incorrect input type');
        })
        it('returns num + 5 for correct input', () => {
            expect(mathEnforcer.addFive(2)).equal(7);
            expect(mathEnforcer.addFive(-2)).equal(3);
        })
        it('returns num + 5 for correct input float', () => {
            expect(mathEnforcer.addFive(2.5)).closeTo(7.5, 0.01);
            expect(mathEnforcer.addFive(-2.5)).closeTo(2.5, 0.01);
        })
    })
    describe('subtractTen', () => {
        it('returns undefined for empty input', () => {
            expect(mathEnforcer.subtractTen()).equal(undefined, 'Missing input');
        })
        it('returns undefined for incorrect data type', () => {
            expect(mathEnforcer.subtractTen('str')).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.subtractTen((a, b) => a + b)).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.subtractTen(true)).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.subtractTen(['str'])).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.subtractTen({ str: 'str' })).equal(undefined, 'Incorrect input type');
        })
        it('returns num - 10 for correct input', () => {
            expect(mathEnforcer.subtractTen(20)).equal(10);
            expect(mathEnforcer.subtractTen(-20)).equal(-30);
            expect(mathEnforcer.subtractTen(0)).equal(-10);
        })
        it('returns num - 10 for correct input float', () => {
            expect(mathEnforcer.subtractTen(20.5)).closeTo(10.5, 0.01);
            expect(mathEnforcer.subtractTen(-20.5)).closeTo(-30.5, 0.01);
        })
    })
    describe('sum', () => {
        it('returns undefined for empty input', () => {
            expect(mathEnforcer.sum()).equal(undefined, 'Missing input');
        })
        it('returns undefined for incomplete input', () => {
            expect(mathEnforcer.sum(1)).equal(undefined, 'Incomplete input');
        })
        it('returns undefined for incorrect data type', () => {
            expect(mathEnforcer.sum('str', 'two')).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.sum(2, 'two')).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.sum('str', 2)).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.sum((a, b) => a + b), 2).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.sum(2, (a, b) => a + b)).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.sum(true, 2)).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.sum(['str', 2])).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.sum({ str: 'str' }, 2)).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.sum(2, { str: 'str' })).equal(undefined, 'Incorrect input type');
            expect(mathEnforcer.sum('2', '2')).equal(undefined, 'Incorrect input type');
        })
        it('returns num + num for correct pos input', () => {
            expect(mathEnforcer.sum(2, 2)).equal(4);
        })
        it('returns num + num for correct neg input', () => {
            expect(mathEnforcer.sum(2, -2)).equal(0);
            expect(mathEnforcer.sum(-2, -2)).equal(-4);
        })
        it('returns num + num for correct input float', () => {
            expect(mathEnforcer.sum(2.5, 2)).closeTo(4.5, 0.01);
            expect(mathEnforcer.sum(2, 2.5)).closeTo(4.5, 0.01);
            expect(mathEnforcer.sum(-2.5, 2)).closeTo(-0.5, 0.01);
            expect(mathEnforcer.sum(2, -2.5)).closeTo(-0.5, 0.01);
            expect(mathEnforcer.sum(-2, 2.5)).closeTo(0.5, 0.01);
            expect(mathEnforcer.sum(2.5, -2)).closeTo(0.5, 0.01);
            expect(mathEnforcer.sum(-2.5, -2)).closeTo(-4.5, 0.01);
            expect(mathEnforcer.sum(-2.5, -2.5)).closeTo(-5, 0.01);
        })

    })
})