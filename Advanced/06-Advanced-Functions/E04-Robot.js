function solution() {

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function (com) {
        if (com.includes('restock')) {
            let [, ingredient, qty] = com.split(' ');
            stock[ingredient] += Number(qty);
            return 'Success';
        } else if (com.includes('prepare')) {
            let [, food, qty] = com.split(' ');
            let available = true;
            for (const ingredient in recipes[food]) {
                let required = (recipes[food][ingredient]) * qty;
                if (stock[ingredient] < required) {
                    available = false;
                    return `Error: not enough ${ingredient} in stock`;
                }
            }
            if (available) {
                for (const ingredient in recipes[food]) {                    
                    let required = (recipes[food][ingredient]) * qty;
                    stock[ingredient] -= required;
                }
            }
            return 'Success';
        } else if (com.includes('report')) {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
        }
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

