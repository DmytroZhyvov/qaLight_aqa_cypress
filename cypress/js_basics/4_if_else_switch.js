if(9 == 9){
    console.log('Result')
}

// ми хочемо зʼїсти або 3 гамбургери та 1 колу АБО 2 порції нагетсів і дві порціʼ картоплі
const hamburger2 = 5;
const fries2 = 1;
const naggets = 1;
const cola = 1;

if(hamburger2 === 3 && cola || naggets === 2 && fries2 >= 2){
    console.log('Я ситий')
} else {
    console.log('Я все ще голодний')
}

if(4){
    console.log('Я ситий')
} else {
    console.log('Я все ще голодний')
}

let num = 50;

// if(num < 49){
//     console.log('Меньше 49')
// } else if (num > 100){
//     console.log('Більше 100')
// } else {
//     console.log('ok')
// }

(num === 50) ? console.log('ok') : console.log('error')

let number = 52;

switch(number){
    case 49:
        console.log('Наше значення 49')
        break;
    case 50:
        console.log('Наше значення 50')
        break;
    case 51:
        console.log('Наше значення 51')
        break;
    case 52:
        console.log('Наше значення 52')
        break;
}
