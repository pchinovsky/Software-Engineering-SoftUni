function calculator() {
 
    let num1Field;
    let num2Field;
    let resField;

    return {
        init: function(selecor1, selector2, resultSelector) {
            num1Field = document.querySelector(selecor1);
            num2Field = document.querySelector(selector2);
            resField = document.querySelector(resultSelector);
        },
        add: function() {
            resField.value = Number(num1Field.value) + Number(num2Field.value);
        }, 
        subtract: function() {
            resField.value = Number(num1Field.value) - Number(num2Field.value);
        }
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
