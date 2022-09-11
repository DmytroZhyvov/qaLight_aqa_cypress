/*
    Типи даних:

    Прості або примітиви:
    - числа
    - текст
    - логічний тип або булевий
    - null
    - undefined
    - Symbol
    - BigInt

    Обʼєкти:
    - масиви
    - функції
    - обʼєкт дати
    - регулярні вирази
    - помилки
    - обʼєкт
*/

// int - числа до 2^53

let number = 4;
let floatNumber = 5.5;

console.log(4/0);
console.log(-4/0);

console.log('a' * 5);

let text = '4';

let booleanType = true; // false

let a = null;

let b;
console.log(a);

let object = {};
console.log(object);

let person = {
    age: 20,
    name: 'Dmytro',
    isMarried: true
};

console.log('Вік: '+ person.age);
console.log(`Імʼя ${person.name} ${person.isMarried}`);
console.log(person.isMarried);

let endpoint = 'help';
console.log(`https://someUrl/${endpoint}`);

let arr = ['text', 6, {a:1, b:2, c:3}, [1, 2, 3]];
console.log(arr[3][1], arr[2].a);

let numArr = [1, 2, 3];
let numObj = {a:1, b:2, c:3};

console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna': 1000,
    'Vlada': 1200
};

let salaryArr = ['Anna', 1000, 'Vlada', 1200]

let someArr = [1, 2, 3];
let objArr = {
    0: 1,
    1: 2,
    2: 3
};
console.log(someArr[0]);
console.log(objArr[0]);

let objArr1 = {
    a: 1,
    b: 2,
    c: 3
};
console.log(objArr1['a']);

let num = 1;
console.log(num);
num = 2;
console.log(num);

const objArr2 = {
    a: 1,
    b: 2,
    c: 3
};

console.log(objArr2.a);

objArr2.a = 5;
console.log(objArr2.a);
