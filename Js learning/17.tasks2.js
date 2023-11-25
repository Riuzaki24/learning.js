"use strict";

function calculateVolumeAndArea(length) {
    if(typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0;
        area = 0;

    volume = length * length * length
    area = 6 * length * length

    return `Объём куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));



function getCoupeNumber(seat) {
    if(typeof(seat) !== 'number' || seat < 0 || !Number.isInteger(seat)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if(seat === 0 || seat > 36) {
        return 'Таких мест в вагоне не существует';
    } else {
        return Math.ceil(seat / 4);
    }

}

console.log(getCoupeNumber(25));




//=======================================================================//


function getTimeFromMinutes(getMinutes) {
    if(typeof(getMinutes) !== 'number' || getMinutes < 0 || !Number.isInteger(getMinutes)) {
        return "Ошибка, проверьте данные";
    }

    let hours = 0;
        minutes = 0;


    hours = Math.floor(getMinutes / 60);
    minutes = getMinutes - hours * 60;

    if(getMinutes < 60) {
        return `Это ${hours} часов и ${minutes} минут`;
    } else if(getMinutes < 120) {
        return `Это ${hours} час и ${minutes} минут`;
    } else if(getMinutes < 240){
        return `Это ${hours} часа и ${minutes} минут`;
    } else {
        return `Это ${hours} часов и ${minutes} минут`;
    }
}

console.log(getTimeFromMinutes(0));


function findMaxNumber(a, b, c, d) {
    if(typeof(a) !== 'number' 
    || typeof(b) !== 'number' 
    || typeof(c) !== 'number' 
    || typeof(d) !== 'number' ) {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(8, 4, 5.8));
console.log(findMaxNumber(6, 1, '11', '16'));

//======================================================================//

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    }
    
    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }
    
    return result;
}

console.log(fib(5));