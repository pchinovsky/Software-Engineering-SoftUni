import { expect, assert } from 'chai';
import { describe } from 'mocha';
import { foodDelivery } from './food delivery.js';


describe('foodDelivery obj', () => {
    it('has expected structure', () => {
        assert.isFunction(foodDelivery.getCategory);
        assert.isFunction(foodDelivery.addMenuItem);
        assert.isFunction(foodDelivery.calculateOrderCost);
    });

    describe('getCategory meth', () => {
        it('valid', () => {
            expect(foodDelivery.getCategory('Vegan')).equal('Dishes that contain no animal products.');
            expect(foodDelivery.getCategory('Vegetarian')).equal('Dishes that contain no meat or fish.');
            expect(foodDelivery.getCategory('Gluten-Free')).equal('Dishes that contain no gluten.');
            expect(foodDelivery.getCategory('All')).equal('All available dishes.');
        });

        it('invalid', () => {
            expect(() => foodDelivery.getCategory('Meat')).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory('')).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory(null)).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory(1)).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory([])).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory()).to.throw('Invalid Category!');
        });
    });

    describe('addMenuItem meth', () => {
        it('valid', () => {
            const menuItems = [
                { name: 'saladina', price: 4.99 },
                { name: 'burgerche', price: 9.99 },
                { name: 'pizzka', price: 15.00 }
            ];
            expect(foodDelivery.addMenuItem(menuItems, 10)).equal('There are 2 available menu items matching your criteria!');
        });

        it('invalid', () => {
            expect(() => foodDelivery.addMenuItem([], 10)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([{ name: 'salad', price: 4.99 }], '10')).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([{ name: 'salad', price: 4.99 }], 4)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem('blabla', 10)).to.throw('Invalid Information!');
        });
    });

    describe('calculateOrderCost meth', () => {
        it('valid', () => {
            expect(foodDelivery.calculateOrderCost(['standard'], ['sauce'], false)).equal('You spend $4.00 for shipping and addons!');
            expect(foodDelivery.calculateOrderCost(['express'], ['beverage'], false)).equal('You spend $8.50 for shipping and addons!');
            expect(foodDelivery.calculateOrderCost(['express'], ['sauce'], true)).equal('You spend $5.10 for shipping and addons with a 15% discount!');
            expect(foodDelivery.calculateOrderCost(['standard'], ['beverage'], true)).equal('You spend $5.52 for shipping and addons with a 15% discount!');
            expect(foodDelivery.calculateOrderCost([], [], true)).equal('You spend $0.00 for shipping and addons with a 15% discount!');
        });

        it('invalid', () => {
            expect(() => foodDelivery.calculateOrderCost('standard', ['sauce'], false)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost(['standard'], 'sauce', false)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost('standard', 'sauce', false)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost(['standard'], ['sauce'], 'false')).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost(['standard'], ['sauce'])).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], [], 'false')).to.throw('Invalid Information!');
        });
    });
});