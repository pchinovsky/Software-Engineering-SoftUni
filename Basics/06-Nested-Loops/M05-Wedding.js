function weddingSeats(input) {


let men = Number(input[0]);
let women = Number(input[1]);
let tables = Number(input[2]);

let meets = "";

let end = false;

for (let i = 1; i <= men; i++)   {

    for (let b = 1; b <= women; b++) {

        let meet = (`(${i} <-> ${b})`) + " ";

        tables --

        if (tables >= 0) {

            meets += meet;

        } else {

            end = true;

            break;

        }
        
    }

    if (end === true) {

        break;

    }
    
}

console.log(meets);


}
