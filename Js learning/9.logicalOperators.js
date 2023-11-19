"use strict";

// const hamburgers = 5;
// const fries = 0;

// if (hamburgers && fries) {
//     console.log('Я сыт!');
// } 



// const hamburgers = 3;
// const fries = 1;
// const cola = 0;

// console.log((hamburgers === 3 && cola && fries ));

// console.log(1 && 0);
// console.log(5 && 1);
// console.log(null && 5);
// console.log(0 && 'keajfneaoifn');

// if (hamburgers === 3 && cola && fries ) {
//     console.log('Все сыты!');
// } else {
//     console.log('Идём в другое место');
// }


// const hamburgers = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburgers === 3 && cola === 2 || fries === 3 & nuggets) {
//     console.log('Все довольны!');
// } else {
//     console.log('Идём в другое место');
// }

// console.log(hamburgers === 3 && cola === 2 || fries === 3 & nuggets);



let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport );


console.log(!0);


//==================================================//

console.log( NaN || 2 || undefined );
//Ответ: 2


console.log( NaN && 2 && undefined );
//Ответ: NaN


console.log( 1 && 2 && 3 );
//Ответ: 3


console.log( !1 && 2 || !3 );
//Ответ: false


console.log( 25 || null && !3 );
//Ответ: 25


console.log( NaN || null || !3 || undefined || 5);
//Ответ: 5


console.log( NaN || null && !3 && undefined || 5);
//Ответ: 5


console.log( 5 === 5 && 3 > 1 || 5);
//Ответ: true


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
//Ответ: условие выполняется 




