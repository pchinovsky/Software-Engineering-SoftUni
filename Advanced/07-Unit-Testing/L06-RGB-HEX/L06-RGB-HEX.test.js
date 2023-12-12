let expect = require('chai').expect;
const { rgbToHexColor } = require('./L06-RGB-HEX.js');

describe('valid', () => {
    it('returns red', () => {
        expect(rgbToHexColor(255, 0, 0)).equal('#FF0000')
    })
    it('returns green', () => {
        expect(rgbToHexColor(0, 255, 0)).equal('#00FF00')
    })
    it('returns blue', () => {
        expect(rgbToHexColor(0, 0, 255)).equal('#0000FF')
    })
    it('returns white', () => {
        expect(rgbToHexColor(255, 255, 255)).equal('#FFFFFF')
    })
    it('returns black', () => {
        expect(rgbToHexColor(0, 0, 0)).equal('#000000')
    })
})
describe('invalid', () => {
    it('returns undefined for red out of range', () => {
        expect(rgbToHexColor(260, 200, 200)).equal(undefined, 'out of range')
        expect(rgbToHexColor(200, 200, 260)).equal(undefined, 'out of range')        
        expect(rgbToHexColor(200, 260, 200)).equal(undefined, 'out of range')
        expect(rgbToHexColor(260, 260, 260)).equal(undefined, 'out of range')
        expect(rgbToHexColor(-1, 200, 200)).equal(undefined, 'out of range')
        expect(rgbToHexColor(-1, -1, 200)).equal(undefined, 'out of range')
        expect(rgbToHexColor(-1, 200, -1)).equal(undefined, 'out of range')
        expect(rgbToHexColor(200, -1, -1)).equal(undefined, 'out of range')
        expect(rgbToHexColor(-1, -1, -1)).equal(undefined, 'out of range')
    })
    it('returns undefined for num as str', () => {
        expect(rgbToHexColor(200, 200, '200')).equal(undefined, 'not an integer')
        expect(rgbToHexColor('200', 200, 200)).equal(undefined, 'not an integer')
        expect(rgbToHexColor(200, '200', 200)).equal(undefined, 'not an integer')
        expect(rgbToHexColor(200, '200', '200')).equal(undefined, 'not an integer')
        expect(rgbToHexColor('200', '200', '200')).equal(undefined, 'not an integer')
    })
    it('returns undefined for str', () => {
        expect(rgbToHexColor(200, 200, 'blue')).equal(undefined, 'not an integer')
    })
    it('returns undefined for no input', () => {
        expect(rgbToHexColor()).equal(undefined, 'no input')
    })
    it('returns undefined for incomplete input', () => {
        expect(rgbToHexColor(200, 200)).equal(undefined, 'incomplete input')
        expect(rgbToHexColor(200)).equal(undefined, 'incomplete input')
    })
    it('throws ReferenceError for input as parameter name', () => {
        expect(() => rgbToHexColor(200, 200, blue)).to.throw(ReferenceError, 'blue is not defined')
        expect(() => rgbToHexColor(200, green, 200)).to.throw(ReferenceError, 'green is not defined')
        expect(() => rgbToHexColor(red, 200, 200)).to.throw(ReferenceError, 'red is not defined')
        expect(() => rgbToHexColor(red, green, 200)).to.throw(ReferenceError, 'red is not defined')
    })
})