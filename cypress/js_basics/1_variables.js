"use strict";

let number = 5;
const number1 = 1000;

// camelCase
// snake_case
// UPPER_SNAKE_CASE
// kebab-case 
// PascalCase

//console.log(number);

// прямих констант не буває
let obj = {
    age: ''
};
obj.age = 18;
//obj = 1;
console.log(obj);

var firstName = 'Taras';
firstName = 'Dima'

// var існує в памʼяті до того як виконається JSом

console.log(lastName);
var lastName = "Petrenko";

let lastName1 = "Petrenko";
console.log(lastName1);

// область видимості
{
    let number5 = 4;
}
console.log(number5);


{
    var number4 = 4;
}
console.log(number4);


const a = 3000;
const b = 2000;

// 100 lines of code

console.log('Ширина: ' + a + ', довжина:' + b );


const width = 3000;
const length = 2000;

// 100 lines of code

console.log('Ширина: ' + width + ', довжина:' + length );

const carBodyWidth = 3000;
const machineBodyLength = 2000;