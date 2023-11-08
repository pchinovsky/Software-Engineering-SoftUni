function exam(input) {

let examHours = Number(input[0]);
let examMins = Number(input[1]);
let arrivalHours = Number(input[2]);
let arrivalMins = Number(input[3]);

let examAll = examHours * 60 + examMins;
let arrivalAll = arrivalHours * 60 + arrivalMins;
let diff = Math.abs(examAll - arrivalAll);

let hoursDiff = Math.floor(diff / 60);
let minsDiff = diff % 60;

if (arrivalAll > examAll) {
    console.log(`Late`);
} else if (arrivalAll <= examAll) {
    if (diff <= 30) {
        console.log(`On time`);
    } else {
        console.log(`Early`);
    }
}

if (diff >= 1) {
    if (arrivalAll < examAll) {
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else if (diff >= 60) {
            if (minsDiff < 10) {
                console.log(`${hoursDiff}:0${minsDiff} hours before the start`);
            } else {
            console.log(`${hoursDiff}:${minsDiff} hours before the start`);
        }
        }
    } else if (arrivalAll > examAll) {
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else if (diff >= 60) {
            if (minsDiff < 10) {
                console.log(`${hoursDiff}:0${minsDiff} hours after the start`);
            } else {console.log(`${hoursDiff}:${minsDiff} hours after the start`);
        }
        
        }
    }
}

        
  
}
exam(["16", "00", "15", "00"]);