/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/
function checkFoodAvailable (hamburger, fries) {
    let result = 'Задача 1 - Ми йдемо в інше кафе';

    if (hamburger >= 3 && fries >= 1){
        result = 'Задача 1 - Ми поїли';
    }

    return console.log(result);
}

checkFoodAvailable(3, 1);


/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/
function checkPriceInRange(price) {
    (price >= 1000 && price <= 1900) ? console.log(`Задача 2 - Ціна ${price} входить в діапазон`) : console.log('Задача 2 - Невірна ціна');
}

checkPriceInRange(1000);


/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/
function checkPriceNotInRange(price){
    let result_1 = 'Задача 3.1 - Невірна ціна'
    let result_2 = 'Задача 3.2 - Невірна ціна'

    if (price < 1000 || price > 1900) {
        result_1 = `Задача 3.1 - Все гаразд. Ціна ${price} не входить в діапазон`;
    }

    if (!(price >= 1000 && price <= 1900)) {
        result_2 = `Задача 3.2 - Все гаразд. Ціна ${price} не входить в діапазон`;
    }
    return console.log(result_1,'\n',result_2);
}

checkPriceNotInRange(900);


/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
 */
function getSeasonName(seasonNumber) {
    let result;

    if (seasonNumber === 1) {
        result = `Задача 4 - Сезон №${seasonNumber}: це зима`;
    } else if (seasonNumber === 2) {
        result = `Задача 4 - Сезон №${seasonNumber}: це весна`;
    } else if (seasonNumber === 3) {
        result = `Задача 4 - Сезон №${seasonNumber}: це літо`;
    } else if (seasonNumber === 4) {
        result = `Задача 4 - Сезон №${seasonNumber}: це осінь`;
    } else {
        result = `Задача 4 - Помилка, сезона №${seasonNumber} не існує`;
    }
    return console.log(result);
}

getSeasonName(3);


/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
 */
function getMidNum(a, b, c) {
    let midNum;

    if (a > b) {
        if (a > c) {
            if (b > c) {
                midNum = b;
            } else {
                midNum = c;
            }
        } else {
            midNum = a;
        }
    } else {
        if (b > c) {
            if (a > c) {
                midNum = a;
            } else {
                midNum = c;
            }
        } else {
            midNum = b;
        }
    }
    return console.log(`Задача 5 - Cереднє число: ${midNum}`);
}

getMidNum(2,3,1);



/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/
function getWeekDay(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = 'понеділок';
            break;
        case 2:
            dayName = 'вівторок';
            break;
        case 3:
            dayName = 'середа';
            break;
        case 4:
            dayName = 'четвер';
            break;
        case 5:
            dayName =  `п'ятниця`;
            break;
        case 6:
            dayName = 'субота';
            break;
        case 7:
            dayName = 'неділя';
            break;
    }
    return console.log(`Задача 6 - Сьогодні ${dayName}`)
}
getWeekDay(6);


/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/
function getCalc(num1, num2, sign) {
    let result;

    switch (sign) {
        case '+':
            result = num1+num2;
            break;
        case '-':
            result = num1-num2;
            break;
        case '*':
            result = num1*num2;
            break;
        case '/':
            result = num1/num2;
            break;
    }
    return console.log(`Задача 7 - ${result}`)
}

getCalc(10,3, '+');



/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/
function delVowels(text){
    const noVowelText = text.replace(/[аеєиіїоуюя]/gi, '');
    return console.log(`Задача 8 - ${noVowelText}`);
}

delVowels('ПЕревІркА вИдалЕннЯ гОлоснИх букв')



/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
    https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
*/
function getKmFromM(meters){
    let km = meters/1000;
    let lastNum = parseInt(km.toString().slice(-1));
    let ending;

    if (lastNum === 1) {
        ending = '';
    } else if (lastNum > 1 && lastNum < 5){
        ending = 'и'
    } else if (lastNum === 0 || lastNum >= 5){
        ending = 'ів'
    }
    return console.log(`Задача 9 - ${meters}м - це ${km} кілометр${ending}`);
}

getKmFromM(15000);