"use strict";

const usdCurr = 28;
// const eurCurr = 32;
const discount = 0.9

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(10, usdCurr);
promotion(res);

// promotion(convert(10, usdCurr));
// convert(10, eurCurr);


function test() {
    for(let i = 0;  i < 5; i++) {
        console.log(i);
        if(i === 3) return
    }
    console.log('done');
}

test();


function doNothing() {};
console.log(doNothing() === undefined);