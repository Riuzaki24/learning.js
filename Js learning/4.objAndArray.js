"use strict";

const arr = ['a', 'b' , 'c'];

arr[10] = '4567';
console.log(arr);

const arrObj = {
    a: 'a',
    1: 'b',
    2: 'c',
    abc: {
        df:[{},{}],
        def: {

        }
    }
};




// console.log(arr[1]);
const b = 'b';
// arrObj.b = '1234';
arrObj[b] = '1234';


console.log(arrObj['b']);
console.log(arrObj.b);

// const obj = {a: 1, b: 2};

const obj = {
    'Anna': 500,
    'Alice': 800
};