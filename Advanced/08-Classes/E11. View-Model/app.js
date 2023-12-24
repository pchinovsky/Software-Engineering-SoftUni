class Textbox {
    constructor(selector, regex) {
        Object.assign(this, {
            _elements: document.querySelectorAll(selector),
            _invalidSymbols: regex
        });
        Array.from(this._elements).forEach(el => {
            el.addEventListener('input', () => {
                Array.from(this._elements).forEach(el => el.value = this.value);
            });
        });
    }
    get value() {
        return this._elements.length > 0 ? this._elements[0].value : '';
    }
    set value(assigned) {
        return Array.from(this._elements).forEach(el => el.value = assigned);
    }
    get elements() {
        return this._elements;
    }
    isValid() {
        return !Array.from(this._elements).some(el => this._invalidSymbols.test(el.value));
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });