function ops(input) {

    let str = input[0];
    let regex = /([#\|])(?<prod>[a-zA-Z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cals>\d+)\1/g;

    let products = [...str.matchAll(regex)];
    let calsTotal = products.reduce((acc, val) => acc + Number(val.groups.cals), 0)
    let days = calsTotal / 2000;

    console.log(`You have food to last you for: ${Math.floor(days)} days!`);

    for (const product of products) {
        let { prod, date, cals } = product.groups;
        console.log(`Item: ${prod}, Best before: ${date}, Nutrition: ${cals}`);
    }
}
ops(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
