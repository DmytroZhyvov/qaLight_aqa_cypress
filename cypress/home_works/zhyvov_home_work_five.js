/** ЗАВДАННЯ 1
 *
 * 1. Оголосіть змінну та присвойте їй стрілочну функцію
 *
 * 2. У функції не повинно бути параметрів
 *
 * 3. Поверніть з функції рядок "Привіт, світ!"
 *
 * 4. Викличте функцію та виведіть результат у консоль
 *
 */
const helloWorld = () => {
    console.log('Задача 1 - Привіт, світ!')
}

helloWorld();


/** ЗАВДАННЯ 2
 *
 * 1. Виведіть у консоль "Привіт, світ!" із затримкою 5 секунд
 *
 * 2. Використовуйте стрілочну функцію
 */
const helloWorld2 = () => {
    console.log('Задача 2 - Привіт, світ!')
}

setTimeout(helloWorld2,5000);


/** ЗАВДАННЯ 3
 *
 * 1. Створіть об'єкт із трьома властивостями та присвойте його значення змінній:
 * - name
 * - surname
 * - favoriteNumber
 *
 * 2. Напишіть функцію, що прийматиме цей обʼєкт як аргумент і
 *     створюватиме в ньому додаткове поле age з довільним значенням.
 * Результат роботи функції це вивід у консоль рядка
 * "My name is <name> <surname>, I'm <age> years old and my favorite number is <favoriteNumber>"
 */
const person = {
    name: 'Dmytro',
    surname: 'Zhyvov',
    favoriteNumber: 11
}

function addAge(person) {
    person.age = 37
    console.log(`Зaдача 3 - My name is ${person.name} ${person.surname}, I'm ${person.age} years old and my favorite number is ${person.favoriteNumber}`)
}

addAge(person);


/** ЗАВДАННЯ 4
 *
 * 1. Створіть масив з кількома елементами таких типів (int, boolean, string)
 *
 * 2. Створіть стрілочну функцію, що прийматиме цей масив як аргумент.
 *
 * 3. В функції замініть елемент масиву з типом int на інший з типом string
 *
 * 4. Поверніть новий масив як результат роботи функції та виведіть його у консоль
 */
let myArr = [15, true, 'text'];

const replaceInt = (array) => {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            array[i] = array[i].toString();
        }
        newArr.push(array[i]);
    }
    console.log(`Задача 4 - ${newArr}`);
}

replaceInt(myArr);


/** ЗАВДАННЯ 5
 *
 * 1. Виправте код щоб обидва вирази (setTimeout та myFn()) працювали.
 *
 * setTimeout(function myFn() {
 * console.log('hello from myFn')
 * }, 2000)
 *
 * myFn()
 */
function myFn(){
    return console.log('Задача 5 - hello from myFn');
}

myFn();
setTimeout(myFn, 2000);


/** ЗАВДАННЯ 6
 *
 * 1. Створіть масив із 3 об'єктами "cars"
 *
 * 2. Кожен об'єкт повинен мати три властивості
 * - carBrand (рядок)
 * - price (число)
 * - isAvailableForSale (логічне значення)
 *
 * 3. Створіть функцію, що прийматиме цей масив в якості аргументу.
 *
 * 4. В середині функції додайте ще один такий же обʼєкт в масив.
 *     Не створюйте новий обʼєкт в середині функції, а візьміть його з масиву.
 *
 * 5. Поверніть з функції новий масив. Результат роботи функції виведіть у консоль.
 */
let cars = [
    {cardBrand: 'BMW', price: 15000, isAvailableForSale: true},
    {cardBrand: 'Ford', price: 14000, isAvailableForSale: false},
    {cardBrand: 'Zaz', price: 30000, isAvailableForSale: true},
];

function addCar (arr) {
    let newCar = arr[0];
    let newCarArr = arr;
    newCarArr.push(newCar);
    console.log('Задача 6 -');
    return console.log(newCarArr);
}

addCar(cars);


/** ЗАВДАННЯ 7
 *
 * 1. Створіть обʼєкт
 *
 const myObject = {
        key1: true,
        key5: 10,
        key3: 'abc',
        key4: null,
        key10: NaN,
     }
 *
 * 2. Створіть функцію, що прийматиме цей обʼєкт як аргумент.
 *
 * 3. У функції реалізуйте логіку: якщо назва властивості (ключ) дорівнює key3 або key10
 *     то виводьте значення властивості в консоль.
 */
const myObject = {
    key1: true,
    key5: 10,
    key3: 'abc',
    key4: null,
    key10: NaN,
}

function displayKeyValue(object) {
    let result = [];
    for (let key in object) {
        if(key === 'key3' || key === 'key10') {
            result.push(object[key]);
        }
    }
    return console.log(`Задача 7 - ${result}`)
}

displayKeyValue(myObject);



/** ЗАВДАННЯ 8
 *
 * 1. Створіть функцію "findProductById" із двома параметрами:
 * - ID товару
 * - масив товарів
 *
 * 2. Функція повинна повернути товар із певним ID
 *
 * 3. Якщо товару з певним ID у масиві товарів немає,
 * функція має повернути "undefined"
 *
 * 4. Також всередині функції виведіть у консоль товар по ID

 const products = [
 { productId: 1355, name: 'phone' },
 { productId: 5131, name: 'laptop' },
 { productId: 6134, name: 'tablet' },
 ]

 console.log(findProductById(6134, products)) // { postId: 6134, name: 'tablet' }

 console.log(findProductById(4511, products)) // undefined

 */
const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
]

function findProductById(id,productList){
    let result;

    for (let i = 0; i < productList.length; i++) {
        if (id === productList[i].productId) {
            result = productList[i];
        }
    }

    return console.log('Задача 8 -', result);
}

findProductById(6134, products);


/** ЗАВДАННЯ 9
 *
 * 1. Створіть функцію "arraySortInfo" з одним параметром - "inputArray", та реалізуйте наступну логіку
 *
 * 2. Якщо хоча б один елемент у масиві не є числом – повернути "Деякі елементи не є числами"
 *
 * 3. Якщо числа у масиві відсортовані за зростанням - повернути "Масив відсортований за зростанням"
 *
 * 4. Якщо числа в масиві відсортовані за спаданням - повернути "Масив відсортований за спаданням".
 *
 * 5. Якщо масив не відсортований - повернути "Масив не відсортований"
 */

/*  const a = [5, 'abc', 10, 1]
 const b = [4, 10, 14, 25, 25, 50]
 const c = [150, 132, 80, 40]
 const d = [15, 26, 10, 23, 85]

 console.log(arraySortInfo(a)) // Деякі елементи не є числами
 console.log(arraySortInfo(b)) // Масив відсортований за зростанням
 console.log(arraySortInfo(c)) // Масив відсортований за спаданням
 console.log(arraySortInfo(d)) // Масив не відсортований */

/**
 * ПІДКАЗКИ
 *
 * Підказка 1: Використовуйте метод масивів "every"
 * Підказка 2: Ви повинні використовувати два параметри в колбек функції "element", "index"
 * Підказка 3: Кожен елемент масиву, крім першого, слід порівнювати з попереднім
 */

const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

function arraySortInfo(inputArray){
    let result;

    function isNumber(element){
        return typeof element === 'number';
    }

    function isSortedAsc(element, index, array) {
        return index === 0 || element >= array[index - 1]
    }

    function isSortedDes(element, index, array) {
        return index === 0 || element <= array[index - 1]
    }

    if (inputArray.every(isNumber)){
        if (inputArray.every(isSortedAsc)) {
            result = 'Задача 9 - Масив відсортований за зростанням'
        } else if (inputArray.every(isSortedDes)) {
            result = 'Задача 9 - Масив відсортований за спаданням'
        } else {
            result = 'Задача 9 - Масив не відсортований'
        }
    } else {
        result = 'Задача 9 - Деякі елементи не є числами'
    }

    return console.log(result);

}

arraySortInfo(a)