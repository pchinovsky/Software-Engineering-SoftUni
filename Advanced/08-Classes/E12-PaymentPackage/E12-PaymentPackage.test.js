let expect = require('chai').expect;
const { PaymentPackage } = require('./E12-PaymentPackage.js');

describe('', () => {
    let pack;
    beforeEach(() => {
        pack = new PaymentPackage('name', 10);
    })
    it('not throw error for correct input', () => {
        expect(() => pack.name = 'name').not.to.throw();
        expect(() => pack.value = 10).not.to.throw();
        expect(() => pack.VAT = 20).not.to.throw();
        expect(() => pack.active = true).not.to.throw();
    })
    it('not throw error for correct input', () => {
        expect(() => new PaymentPackage('1', 0)).not.to.throw();
        expect(pack.name).equal('name');
        expect(pack.value).equal(10);
        expect(pack.VAT).equal(20);
        expect(pack.active).equal(true);
    })
    it('throws error for incorrect input', () => {
        expect(() => new PaymentPackage()).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(10, 10, 10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage('', 10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(10, 10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage([], 10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(['name'], 10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage({}, 10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage({'name': 'name'}, 10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(null, 10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(undefined, 10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(NaN, 10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(false, 10)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage('name', -10)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('name')).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('name', '10')).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('name', [])).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('name', [10])).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('name', {})).to.throw('Value must be a non-negative number');
    })
    it('throws error for incorrect VAT set', () => {
        expect(() => pack.VAT = '').to.throw('VAT must be a non-negative number');
        expect(() => pack.VAT = []).to.throw('VAT must be a non-negative number');
        expect(() => pack.VAT = {}).to.throw('VAT must be a non-negative number');
        expect(() => pack.VAT = {10: '10'}).to.throw('VAT must be a non-negative number');
        expect(() => pack.VAT = 'name').to.throw('VAT must be a non-negative number');
        expect(() => pack.VAT = -10).to.throw('VAT must be a non-negative number');
        expect(() => pack.VAT = '10').to.throw('VAT must be a non-negative number');
        expect(() => pack.VAT = [10]).to.throw('VAT must be a non-negative number');
        expect(() => pack.VAT = null).to.throw('VAT must be a non-negative number');
        expect(() => pack.VAT = undefined).to.throw('VAT must be a non-negative number');
        expect(() => pack.VAT = false).to.throw('VAT must be a non-negative number');
    })
    it('throws error for incorrect active set', () => {
        expect(() => pack.active = '').to.throw('Active status must be a boolean');
        expect(() => pack.active = '10').to.throw('Active status must be a boolean');
        expect(() => pack.active = 10).to.throw('Active status must be a boolean');
        expect(() => pack.active = -10).to.throw('Active status must be a boolean');
        expect(() => pack.active = []).to.throw('Active status must be a boolean');
        expect(() => pack.active = [true]).to.throw('Active status must be a boolean');
        expect(() => pack.active = {}).to.throw('Active status must be a boolean');
        expect(() => pack.active = {'true': 'false'}).to.throw('Active status must be a boolean');
        expect(() => pack.active = 'Boolean').to.throw('Active status must be a boolean');
        expect(() => pack.active = null).to.throw('Active status must be a boolean');
        expect(() => pack.active = undefined).to.throw('Active status must be a boolean');
        expect(() => pack.active = NaN).to.throw('Active status must be a boolean');
    })
    it('returns new str for name set', () => {
        pack.name = 'shame';
        expect(pack.name).equal('shame', 'Name setter not working');
    })
    it('returns new value for value set', () => {
        pack.value = 20;
        expect(pack.value).equal(20, 'Value setter not working');
    })
    it('returns new value for value set', () => {
        pack.value = 0;
        expect(pack.value).equal(0, 'Value setter not working');
    })
    it('returns new value for VAT set', () => {
        pack.VAT = 30;
        expect(pack.VAT).equal(30, 'VAT setter not working');
    })
    it('returns new bool for active set', () => {
        pack.active = false;
        expect(pack.active).equal(false, 'Active setter not working');
    })
    it('returns correct output for toString method', () => {
        expect(pack.toString()).equal('Package: name\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12', 'toString incorrect output')
    })
    it('returns correct output for toString method', () => {
        pack.VAT = 10;
        expect(pack.toString()).equal('Package: name\n- Value (excl. VAT): 10\n- Value (VAT 10%): 11', 'toString incorrect output')
    })
    it('returns correct output for toString method', () => {
        pack.VAT = 30;
        expect(pack.toString()).equal('Package: name\n- Value (excl. VAT): 10\n- Value (VAT 30%): 13', 'toString incorrect output')
    })
    it('returns correct output for toString method', () => {
        pack.active = false;
        expect(pack.toString()).equal('Package: name (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12', 'toString incorrect output')
    })
    it('returns correct output for toString method', () => {
        pack.VAT = 10;
        pack.active = false;
        expect(pack.toString()).equal('Package: name (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 10%): 11', 'toString incorrect output')
    })
    it('returns correct output for toString method', () => {
        pack.VAT = 30;
        pack.active = false;
        expect(pack.toString()).equal('Package: name (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 30%): 13', 'toString incorrect output')
    })  
})

