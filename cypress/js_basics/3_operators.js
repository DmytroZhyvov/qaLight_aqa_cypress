console.log('arr ' + '- object')

console.log(2 + 2)

console.log('2' + 2)

console.log(2 + + '2')

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr++)
console.log(decr--)

console.log(++incr)
console.log(--decr)


console.log(5 < 2);
console.log(5 > 2); // <= >= ==

console.log(2 == 2);
console.log(2 === 2);

console.log('2' == 2);
console.log('2' === 2);

console.log('2' !== 2);

// &&

let isChecked = true,
    isClosed = false;

// console.log(isChecked && isClosed);


// ||

// console.log(isChecked || isClosed);


//console.log(!isChecked && !isClosed);

console.log(!isChecked || isClosed);

const hamburger = false;
const fries = true;

console.log(hamburger && fries)


const hamburger1 = 5;
const fries1 = 1;

if(hamburger1 && fries1){
    console.log('Я ситий')
}
// null, '', undefined, 0, NaN - завжди false


// ми хочемо зʼїсти або 3 гамбургери та 1 колу АБО 2 порції нагетсів і дві порціʼ картоплі
const hamburger2 = 5;
const fries2 = 1;
const naggets = 1;
const cola = 1;

if(hamburger2 >= 3 && cola || naggets >= 2 && fries2 >= 2){
    console.log('Я ситий')
}
