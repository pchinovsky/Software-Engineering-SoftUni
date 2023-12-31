let expect = require('chai').expect;
const { assert } = require('chai');
const { chooseYourCar } = require('./chooseYourCar.js');

describe('chooseYourCar', () => {
    it('has expected data type', () => {
        expect(chooseYourCar).to.exist;
        expect(typeof chooseYourCar).equal('object', 'Incorrect data type');
    })
    it('has expected structure', () => {
        assert.isFunction(chooseYourCar.choosingType);
        assert.isFunction(chooseYourCar.brandName);
        assert.isFunction(chooseYourCar.carFuelConsumption);
    })
    describe('choosingType method', () => {
        it('valid input', () => {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2000)).equal('This Sedan is too old for you, especially with that blue color.');
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2011)).equal('This blue Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2009)).equal('This Sedan is too old for you, especially with that blue color.');
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2010)).equal('This blue Sedan meets the requirements, that you have.');
        })
        it('invalid input', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 1899)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 2023)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', -20)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Seden', 'blue', 1910)).to.throw('This type of car is not what you are looking for.');
            expect(() => chooseYourCar.choosingType('Seden', 'blue', 1820)).to.throw('Invalid Year!');
        })
    })
    describe('brandName method', () => {
        it('invalid input', () => {
            expect(() => chooseYourCar.brandName()).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['str'], -1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['str'], 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['str', 'str', 'str'], 4)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(1, ['str'])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['str'])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName('str')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName('str', 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName([], 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName({}, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(1, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(null, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(undefined, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(NaN, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(false, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['str'], '0')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['str1', 'str2'], '1')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['str1', 'str2', 'str3'], '1')).to.throw('Invalid Information!');
        })
        it('valid input', () => {
            expect(chooseYourCar.brandName(['str'], 0)).equal('', 'mes');
            expect(chooseYourCar.brandName(['str1', 'str2'], 1)).equal('str1', 'mes');
            expect(chooseYourCar.brandName(['str1', 'str2', 'str3'], 1)).equal('str1, str3', 'mes');
        })
    })
    describe('carFuelConsumption method', () => {
        it('invalid input', () => {
            expect(() => chooseYourCar.carFuelConsumption()).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(1, -1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(-1, -1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(0, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption('1', '1')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption('1', 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(1, '1')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption('str', 'str')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption({1: 1}, 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption([1], 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(1, [1])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(1, 'str')).to.throw('Invalid Information!');
        })
    })
    it('valid input', () => {
        expect(chooseYourCar.carFuelConsumption(50, 3)).equal('The car is efficient enough, it burns 6.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(50, 3.5)).equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(50, 4)).equal('The car burns too much fuel - 8.00 liters!');
        expect(chooseYourCar.carFuelConsumption(50, 30)).equal('The car burns too much fuel - 60.00 liters!');
    })
})