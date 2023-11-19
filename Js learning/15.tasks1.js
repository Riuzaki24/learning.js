"use strict";

// Место для первой задачи
function sayHello(name) {
	return `Привет, ${name}!`
}
console.log(sayHello("Антон"));



// Место для второй задачи
function returnNeighboringNumbers(num) {
 return [num - 1, num, num + 1]
}
console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(numBase, countInProgress) {
    if (typeof(countInProgress) !== 'number' || countInProgress <= 0) {
        return numBase;
    }

    let str = '';

    for (let i = 1; i <= countInProgress; i++) {
        if (i === countInProgress) {
            str += `${numBase * i}`;
        } else {
            str += `${numBase * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(3, 5));