"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('error!')
}


// const num = 50;

// if (num < 49) {
//     console.log('error')
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');


const num = 50;

switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100: 
        console.log('неверно');
        break;   
    case 100: 
        console.log('в точку');
        break; 
    default: 
        console.log('не в этот раз!');
        break;
}