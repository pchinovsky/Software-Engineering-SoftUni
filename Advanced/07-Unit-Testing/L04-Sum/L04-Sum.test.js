let expect = require('chai').expect;
let { sum } = require('./L04-Sum-function.js');

describe('', () => {
  it('returns NaN for string input', () => {
    expect(isNaN(sum('text'))).equal(true, 'input must be an array')
  })
  it('returns NaN for string elements', () => {
    expect(isNaN(sum(['a', 'b']))).to.be.true
  })
  it('throws TypeError for number input', () => {
    expect(() => sum(24)).to.throw(TypeError, 'arr is not iterable')
  })
  it('returns number for correct data type', () => {
    expect(sum([1, 2, 3])).equal(6)
    expect(sum([6])).equal(6)
  })
  it('returns negative number for correct data type - negative numbers', () => {
    expect(sum([-1, -2, -3])).equal(-6);
  })
  it('returns number for numbers as strings', () => {
    expect(sum([1, 2, '3'])).equal(6);
  })
  it('returns 0 for empty array', () => {
    expect(sum([])).equal(0, 'input must be an array')
  })
})


