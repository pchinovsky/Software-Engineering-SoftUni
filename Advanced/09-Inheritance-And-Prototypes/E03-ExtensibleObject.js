function extensibleObject() {

    let obj1 = {};
    let obj2 = Object.create(obj1);

    obj2.extend = function(template) {
        const templateArr = Object.entries(template);
        for (const [prop, val] of templateArr) {
            if (typeof val === 'function') {
                obj1[prop] = val;
            } else {
                obj2[prop] = val;
            }
        }
    }
    return obj2;
}

const myObj = extensibleObject();
console.log(myObj);

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}

myObj.extend(template);

console.log(myObj);
console.log(Object.getPrototypeOf(myObj));

