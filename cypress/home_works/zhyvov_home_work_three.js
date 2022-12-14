/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/
const hamburger = 3;
const fries = 1;

if (hamburger >= 3 && fries >= 1){
    console.log('Задача 1 - Ми поїли');
} else {
    console.log('Задача 1 - Ми йдемо в інше кафе');
}

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/
const price = 1500;

(price >= 1000 && price <= 1900) ? console.log(`Задача 2 - Ціна ${price} входить в діапазон`) : console.log(' Задача 2 - Невірна ціна');

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/
const price2 = 1901;

if (price2 < 1000 || price2 > 1900) {
    console.log(`Задача 3.1 - Все гаразд. Ціна ${price2} не входить в діапазон`);
} else {
    console.log('Задача 3.1 - Невірна ціна');
}

if (!(price2 >= 1000 && price2 <= 1900)) {
    console.log(`Задача 3.2 - Все гаразд. Ціна ${price2} не входить в діапазон`);
} else {
    console.log('Задача 3.2 - Невірна ціна');
}

/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
 */
const seasonNum = 1;

if (seasonNum === 1) {
    console.log(`Задача 4 - Сезон №${seasonNum}: це зима`);
} else if (seasonNum === 2) {
    console.log(`Задача 4 - Сезон №${seasonNum}: це весна`);
} else if (seasonNum === 3) {
    console.log(`Задача 4 - Сезон №${seasonNum}: це літо`);
} else if (seasonNum === 4) {
    console.log(`Задача 4 - Сезон №${seasonNum}: це осінь`);
} else {
    console.log(`Задача 4 - Помилка, сезона №${seasonNum} не існує`);
}

/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
 */
const a = 3;
const b = 1;
const c = 2;

if (a > b) {
    if (a > c) {
        if (b > c) {
            console.log(`Задача 5 - середнє число: 'b'`);
        } else {
            console.log(`Задача 5 - середнє число: 'c'`);
        }
    } else {
        console.log(`Задача 5 - середнє число: 'a'`);
    }
} else {
    if (b > c) {
        if (a > c) {
            console.log(`Задача 5 - середнє число: 'a'`);
        } else {
            console.log(`Задача 5 - середнє число: 'c'`)
        }
    } else {
        console.log(`Задача 5 - середнє число: 'b'`);
    }
}

/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/
const todayNum = 5;

switch (todayNum) {
    case 1:
        console.log('Задача 6 - Сьогодні понеділок');
        break;
    case 2:
        console.log('Задача 6 - Сьогодні вівторок');
        break;
    case 3:
        console.log('Задача 6 - Сьогодні середа');
        break;
    case 4:
        console.log('Задача 6 - Сьогодні четвер');
        break;
    case 5:
        console.log(`Задача 6 - Сьогодні п'ятниця`);
        break;
    case 6:
        console.log('Задача 6 - Сьогодні субота');
        break;
    case 7:
        console.log('Задача 6 - Сьогодні неділя');
        break;
}
/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/
let num1 = 2;
let num2 = 3;
let mathSymbol = '+'
switch (mathSymbol) {
    case '+':
        console.log(`Задача 7 - ${num1+num2}`);
        break;
    case '-':
        console.log(`Задача 7 - ${num1-num2}`);
        break;
    case '*':
        console.log(`Задача 7 - ${num1*num2}`);
        break;
    case '/':
        console.log(`Задача 7 - ${num1/num2}`);
        break;
}

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/
const str = 'ПЕревІркА вИдалЕннЯ гОлоснИх букв';
const strNoVowels = str.replace(/[аеєиіїоуюя]/gi, '');
console.log(`Задача 8 - ${strNoVowels}`);

/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
    https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
*/

let m = 15100;
let km = m/1000;
let lastNum = parseInt(km.toString().slice(-1));
let ending = '';

if (lastNum === 1) {
    ending = '';
} else if (lastNum > 1 && lastNum < 5){
    ending = 'и'
} else if (lastNum === 0 || lastNum >= 5){
    ending = 'ів'
}

console.log(`Задача 9 - ${m}м - це ${km} кілометр${ending}`);